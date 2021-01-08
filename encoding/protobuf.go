package encoding

import (
	"encoding/binary"
	"fmt"
	"io"

	"github.com/gogo/protobuf/proto"
)

// Single shot encoding
func Encode(msg proto.Message) ([]byte, error) {
	buffer := new(proto.Buffer)
	//buffer.SetDeterministic(true)
	err := buffer.Marshal(msg)
	if err != nil {
		return nil, err
	}
	return buffer.Bytes(), nil
}

// Single shot decoding
func Decode(bs []byte, msg proto.Message) error {
	return proto.Unmarshal(bs, msg)
}

// Write messages with length-prefix framing to the provider Writer. Returns the number of bytes written.
func WriteMessage(w io.Writer, pb proto.Message) (int, error) {
	const errHeader = "WriteMessage()"
	buf, err := Encode(pb)
	if err != nil {
		return 0, fmt.Errorf("%s: %v", errHeader, err)
	}
	// Write length prefix
	bs := make([]byte, binary.MaxVarintLen64)
	n := binary.PutVarint(bs, int64(len(buf)))
	written, err := w.Write(bs[:n])
	if err != nil {
		return written, fmt.Errorf("%s: %v", errHeader, err)
	}
	// Write message
	n, err = w.Write(buf)
	written += n
	return written, nil
}

// Read messages with length-prefix framing from the provided Reader. Returns the number of bytes read and io.EOF if
// ReadMessage is called exactly on the end of a stream.
func ReadMessage(r io.Reader, pb proto.Message) (int, error) {
	const errHeader = "ReadMessage()"
	// Read varint
	br := newByteReader(r)
	msgLength, err := binary.ReadVarint(br)
	if err != nil {
		// Only return EOF if called precisely at the end of stream
		if err == io.EOF && br.read == 0 {
			return 0, io.EOF
		}
		return br.read, fmt.Errorf("%s: %v", errHeader, err)
	}
	read := br.read
	// Use any message bytes at end of buffer
	bs := make([]byte, msgLength)
	n, err := r.Read(bs)
	read += n
	if err != nil {
		return read, fmt.Errorf("%s: %v", errHeader, err)
	}
	if len(bs) != n {
		return read, fmt.Errorf("%s: expected protobuf message of %d bytes but could only read %d bytes",
			errHeader, msgLength, n)
	}
	err = Decode(bs, pb)
	if err != nil {
		return read, fmt.Errorf("%s: %v", errHeader, err)
	}
	return read, nil
}

type byteReader struct {
	io.Reader
	byte []byte
	read int
}

func newByteReader(r io.Reader) *byteReader {
	return &byteReader{
		Reader: r,
		byte:   make([]byte, 1),
	}
}

func (br *byteReader) ReadByte() (byte, error) {
	br.byte[0] = 0
	n, err := br.Read(br.byte)
	if err != nil {
		return 0, err
	}
	if n == 0 {
		return 0, io.EOF
	}
	br.read++
	return br.byte[0], nil
}

func (tm TestMessage) String() string {
	return fmt.Sprintf("{Type: %d, Amount: %d}", tm.Type, tm.Amount)
}

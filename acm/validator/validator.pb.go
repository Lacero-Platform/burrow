// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: validator.proto

package validator

import (
	fmt "fmt"
	math "math"
	math_bits "math/bits"

	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	golang_proto "github.com/golang/protobuf/proto"
	crypto "github.com/hyperledger/burrow/crypto"
	github_com_hyperledger_burrow_crypto "github.com/hyperledger/burrow/crypto"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = golang_proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Validator struct {
	Address              *github_com_hyperledger_burrow_crypto.Address `protobuf:"bytes,1,opt,name=Address,proto3,customtype=github.com/hyperledger/burrow/crypto.Address" json:"Address,omitempty"`
	PublicKey            crypto.PublicKey                              `protobuf:"bytes,2,opt,name=PublicKey,proto3" json:"PublicKey"`
	Power                uint64                                        `protobuf:"varint,3,opt,name=Power,proto3" json:"Power,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                                      `json:"-"`
	XXX_unrecognized     []byte                                        `json:"-"`
	XXX_sizecache        int32                                         `json:"-"`
}

func (m *Validator) Reset()      { *m = Validator{} }
func (*Validator) ProtoMessage() {}
func (*Validator) Descriptor() ([]byte, []int) {
	return fileDescriptor_bf1c6ec7c0d80dd5, []int{0}
}
func (m *Validator) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Validator.Unmarshal(m, b)
}
func (m *Validator) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Validator.Marshal(b, m, deterministic)
}
func (m *Validator) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Validator.Merge(m, src)
}
func (m *Validator) XXX_Size() int {
	return xxx_messageInfo_Validator.Size(m)
}
func (m *Validator) XXX_DiscardUnknown() {
	xxx_messageInfo_Validator.DiscardUnknown(m)
}

var xxx_messageInfo_Validator proto.InternalMessageInfo

func (m *Validator) GetPublicKey() crypto.PublicKey {
	if m != nil {
		return m.PublicKey
	}
	return crypto.PublicKey{}
}

func (m *Validator) GetPower() uint64 {
	if m != nil {
		return m.Power
	}
	return 0
}

func (*Validator) XXX_MessageName() string {
	return "validator.Validator"
}
func init() {
	proto.RegisterType((*Validator)(nil), "validator.Validator")
	golang_proto.RegisterType((*Validator)(nil), "validator.Validator")
}

func init() { proto.RegisterFile("validator.proto", fileDescriptor_bf1c6ec7c0d80dd5) }
func init() { golang_proto.RegisterFile("validator.proto", fileDescriptor_bf1c6ec7c0d80dd5) }

var fileDescriptor_bf1c6ec7c0d80dd5 = []byte{
	// 229 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2f, 0x4b, 0xcc, 0xc9,
	0x4c, 0x49, 0x2c, 0xc9, 0x2f, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x84, 0x0b, 0x48,
	0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0x45, 0xf5, 0x41, 0x2c, 0x88, 0x02, 0x29, 0x9e, 0xe4, 0xa2,
	0xca, 0x82, 0x12, 0x28, 0x4f, 0x69, 0x15, 0x23, 0x17, 0x67, 0x18, 0x4c, 0x87, 0x90, 0x17, 0x17,
	0xbb, 0x63, 0x4a, 0x4a, 0x51, 0x6a, 0x71, 0xb1, 0x04, 0xa3, 0x02, 0xa3, 0x06, 0x8f, 0x93, 0xc1,
	0xad, 0x7b, 0xf2, 0x3a, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0x19,
	0x95, 0x05, 0xa9, 0x45, 0x39, 0xa9, 0x29, 0xe9, 0xa9, 0x45, 0xfa, 0x49, 0xa5, 0x45, 0x45, 0xf9,
	0xe5, 0xfa, 0x50, 0xe3, 0xa0, 0xfa, 0x82, 0x60, 0x06, 0x08, 0x99, 0x72, 0x71, 0x06, 0x94, 0x26,
	0xe5, 0x64, 0x26, 0x7b, 0xa7, 0x56, 0x4a, 0x30, 0x29, 0x30, 0x6a, 0x70, 0x1b, 0x09, 0xea, 0x41,
	0x15, 0xc3, 0x25, 0x9c, 0x58, 0x4e, 0xdc, 0x93, 0x67, 0x08, 0x42, 0xa8, 0x14, 0x12, 0xe1, 0x62,
	0x0d, 0xc8, 0x2f, 0x4f, 0x2d, 0x92, 0x60, 0x56, 0x60, 0xd4, 0x60, 0x09, 0x82, 0x70, 0xac, 0x58,
	0x66, 0x2c, 0x90, 0x67, 0x70, 0xb2, 0xbd, 0xf1, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x03,
	0x8f, 0xe5, 0x18, 0x4f, 0x3c, 0x96, 0x63, 0x8c, 0xd2, 0xc6, 0xef, 0xb6, 0xc4, 0xe4, 0x5c, 0x7d,
	0x78, 0x78, 0x24, 0xb1, 0x81, 0xbd, 0x6c, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0xf9, 0x22, 0x2e,
	0xa0, 0x34, 0x01, 0x00, 0x00,
}

func (m *Validator) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Address != nil {
		l = m.Address.Size()
		n += 1 + l + sovValidator(uint64(l))
	}
	l = m.PublicKey.Size()
	n += 1 + l + sovValidator(uint64(l))
	if m.Power != 0 {
		n += 1 + sovValidator(uint64(m.Power))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovValidator(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozValidator(x uint64) (n int) {
	return sovValidator(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}

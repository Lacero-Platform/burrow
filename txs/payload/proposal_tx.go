package payload

import (
	"crypto/sha256"
	"fmt"

	"github.com/hyperledger/burrow/encoding"
)

func NewProposalTx(propsal *Proposal) *ProposalTx {
	return &ProposalTx{
		Proposal: propsal,
	}
}

func (tx *ProposalTx) Type() Type {
	return TypeProposal
}

func (tx *ProposalTx) GetInputs() []*TxInput {
	return []*TxInput{tx.Input}
}

func (tx *ProposalTx) String() string {
	return fmt.Sprintf("ProposalTx{%v}", tx.Proposal)
}

func (tx *ProposalTx) Any() *Any {
	return &Any{
		ProposalTx: tx,
	}
}

func (p *Proposal) Hash() []byte {
	bs, err := encoding.Encode(p)
	if err != nil {
		panic("failed to encode Proposal")
	}

	hash := sha256.Sum256(bs)

	return hash[:]
}

func (p *Proposal) String() string {
	return ""
}

func (v *Vote) String() string {
	return v.Address.String()
}

func DecodeBallot(ballotBytes []byte) (*Ballot, error) {
	ballot := new(Ballot)
	err := encoding.Decode(ballotBytes, ballot)
	if err != nil {
		return nil, err
	}
	return ballot, nil
}

func (p *Ballot) Encode() ([]byte, error) {
	return encoding.Encode(p)
}

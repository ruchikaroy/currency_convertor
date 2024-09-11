import Form from "react-bootstrap/Form";

interface Props {
  amount: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const AmountInput = ({ amount, onChange }: Props) => {
  return (
    <>
      <Form className=".visible-*-block">
        <Form.Label
          style={{
            display: "block",
            float: "left",
            marginRight: "20px",
            fontFamily: "monospace",
            fontSize: "20px",
            marginTop: "-10px",
          }}
        >
          Amount
        </Form.Label>
        <input
          value={amount}
          onChange={onChange}
          className="form-control"
          type="number"
          placeholder="Enter Amount"
          style={{
            padding: "10px",
            border: "solid 1px",
            textAlign: "center",
            fontFamily: "monospace",
          }}
        ></input>
      </Form>
    </>
  );
};

export default AmountInput;

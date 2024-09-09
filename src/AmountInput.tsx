import Form from "react-bootstrap/Form";

interface Props {
  amount: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const AmountInput = ({ amount, onChange }: Props) => {
  return (
    <>
      <Form className="d-flex flex-coloumn">
        <input
          value={amount}
          onChange={onChange}
          className="form-control"
          type="number"
          placeholder="Enter Amount"
          style={{ padding: "10px", border: "solid 1px", textAlign: "center" }}
        ></input>
      </Form>
    </>
  );
};

export default AmountInput;

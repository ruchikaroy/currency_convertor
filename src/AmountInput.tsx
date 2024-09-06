import Form from "react-bootstrap/Form";

const AmountInput = () => {
  return (
    <>
      <Form className="d-flex flex-coloumn">
        <input
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

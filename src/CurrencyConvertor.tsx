import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CurrencyConvertor = () => {
  return (
    <>
      <h1 className="text-center">Currency Convertor</h1>
      <div
        className="d-inline-flex align-items-centre justify-content-center"
        style={{ marginTop: "50px", width: "100%", gap: "10px" }}
      >
        <Form.Label>
          <h3 style={{ margin: "0 10px" }}>Amount</h3>
        </Form.Label>
        <InputGroup className="mb-3">
          <Form.Control type="number" />
        </InputGroup>
        <h3 style={{ margin: "0 10px" }}>From</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">INR</Dropdown.Item>
            <Dropdown.Item href="#/action-3">AUD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CAD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
            <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
            <Dropdown.Item href="#/action-3">JPY</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h3 style={{ margin: "0 10px" }}>To</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">INR</Dropdown.Item>
            <Dropdown.Item href="#/action-3">AUD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CAD</Dropdown.Item>
            <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
            <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
            <Dropdown.Item href="#/action-3">JPY</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <InputGroup className="mb-3" style={{ margin: "0 10px" }}>
          <Form.Control placeholder="Converted Amount" />
        </InputGroup>
      </div>
    </>
  );
};

export default CurrencyConvertor;

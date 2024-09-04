import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CurrencyConvertor = () => {
  const currenciesName = ["USD", "INR", "AUD", "CAD", "EUR", "GBP", "JPY"];

  return (
    <>
      <h1 className="text-center">Currency Convertor</h1>
      <div
        className="d-inline-flex align-items-centre justify-content-center"
        style={{
          marginTop: "50px",
          width: "100%",
          gap: "10px",
          padding: "20px",
        }}
      >
        <Form.Label>
          <h3 style={{ margin: "0 10px" }}>Amount</h3>
        </Form.Label>
        <InputGroup className="mb-3">
          <Form.Control type="number" />
        </InputGroup>
        <h3 style={{ margin: "0 10px" }}>From</h3>
        <select className="form-select" style={{ height: "40px" }}>
          <option value="">Currency</option>
          {currenciesName.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <h3 style={{ margin: "0 10px" }}>To</h3>
        <select className="form-select" style={{ height: "40px" }}>
          <option value="">Currency</option>
          {currenciesName.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <Button
          style={{
            alignSelf: "center",
            marginTop: "-15px",
            alignItems: "center",
          }}
        >
          Calculate
        </Button>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Converted Amount" />
        </InputGroup>
      </div>
      <p className="fs-4 fw-bold text-center" style={{ margin: "50px" }}>
        1 USD = 138.5802 JPY
      </p>
    </>
  );
};

export default CurrencyConvertor;

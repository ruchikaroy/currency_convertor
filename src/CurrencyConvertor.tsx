import { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CurrencyConvertor = () => {
  const currenciesName = ["USD", "INR", "AUD", "CAD", "EUR", "GBP", "JPY"];

  const [selectSourceCurrency, setSelectedSourceCurrency] = useState("");

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
          <DropdownButton title="currency">
            <Dropdown.Menu>
              {currenciesName.map((currency) => (
                <Dropdown.Item
                  key={currency}
                  onClick={(event) => console.log(event)}
                >
                  {currency}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </DropdownButton>
        </Dropdown>
        <h3 style={{ margin: "0 10px" }}>To</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {currenciesName.map((currency) => (
              <Dropdown.Item
                key={currency}
                onClick={() => setSelectedSourceCurrency(currency)}
              >
                {currency}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <InputGroup className="mb-3" style={{ margin: "0 10px" }}>
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

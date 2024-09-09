import Header from "./Header";
import CurrencyConvertor from "./CurrencyConvertor";
import AmountInput from "./AmountInput";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export interface CurrencyToValue {
  currency: string;
  value: number;
}

export interface Data {
  data: CurrencyToValue;
}

function App() {
  const [conversionValue, setConversionValue] = useState<number>(0);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    axiosInstance
      .get<Data>(
        "/v1/latest?apikey=fca_live_lF4WEifVICj6AZTo8HDgtkHczApDLOZvSv9vxHZ4"
      )
      .then((res) => res.data.data)
      .then((currencyToValue: CurrencyToValue) => {
        const firstCurrency = Object.keys(currencyToValue);
        const value = Object.values(currencyToValue);
        setCurrencyOptions([...Object.keys(currencyToValue)]);
        setFromCurrency(firstCurrency[0]);
        setToCurrency(firstCurrency[0 + 1]);
        setExchangeRate(value[0]);
      });
  }, []);

  const handleAmountInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const newValue = Number(event.currentTarget.value);
    setAmount(newValue);
  };

  const currencyToConvert = amount * exchangeRate;

  return (
    <>
      <Header />
      <div
        className="mb-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "315px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <AmountInput amount={amount} onChange={handleAmountInputChange} />
        <CurrencyConvertor
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <CurrencyConvertor
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => setConversionValue(currencyToConvert)}
        >
          CONVERT
        </Button>{" "}
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          {}
          {conversionValue}
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          {toCurrency}
        </div>
      </div>
    </>
  );
}

export default App;

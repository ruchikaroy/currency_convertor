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
  const [conversionValue, setConversionValue] = useState<number>();
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number>(parseInt(""));
  const [amount, setAmount] = useState(parseInt(""));

  useEffect(() => {
    axiosInstance
      .get<Data>(
        "/v1/latest?apikey=fca_live_lF4WEifVICj6AZTo8HDgtkHczApDLOZvSv9vxHZ4"
      )
      .then((res) => res.data.data)
      .then((currencyToValue: CurrencyToValue) => {
        const currencies = Object.keys(currencyToValue);
        const values = Object.values(currencyToValue);
        setCurrencyOptions(currencies);
        setFromCurrency(currencies[0]);
        setToCurrency(currencies[1]);
        setExchangeRate(Math.round(values[0]));
      });
  }, []);

  const handleAmountInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const newValue = Number(event.currentTarget.value);
    setAmount(newValue);
  };

  const currencyToConvert = amount * exchangeRate;

  useEffect(() => {
    if (toCurrency !== null) {
      axiosInstance
        .get<Data>(
          `/v1/latest?apikey=fca_live_lF4WEifVICj6AZTo8HDgtkHczApDLOZvSv9vxHZ4`
        )
        .then((res) => res.data.data)
        .then((currencyToValue: CurrencyToValue) => {
          const currencies = Object.keys(currencyToValue);
          const values = Object.values(currencyToValue);
          let currenciesToValueMapped = [];
          for (let i = 0; i < currencies.length; i++) {
            const currency = currencies[i];
            const value = Math.round(values[i]);
            const obj = { currency: currency, value: value };
            currenciesToValueMapped.push(obj);
          }
          const result = currenciesToValueMapped.find(
            (element) => element.currency === toCurrency
          );
          setExchangeRate(Number(result?.value));
        });
    }
  }, [toCurrency]);

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
          {conversionValue}
        </div>
        {/* <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          {toCurrency}
        </div> */}
      </div>
    </>
  );
}

export default App;

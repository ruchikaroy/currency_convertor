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
  const [conversionValue, setConversionValue] = useState(1);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  //console.log(currencyOptions);

  useEffect(() => {
    axiosInstance
      .get<Data>(
        "/v1/latest?apikey=fca_live_lF4WEifVICj6AZTo8HDgtkHczApDLOZvSv9vxHZ4"
      )
      .then((res) => res.data.data)
      .then((currencyToValue: CurrencyToValue) => {
        setCurrencyOptions([...Object.keys(currencyToValue)]);
      });
  }, []);

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
        <AmountInput />
        <CurrencyConvertor currencyOptions={currencyOptions} />
        <CurrencyConvertor currencyOptions={currencyOptions} />
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
          onClick={() => setConversionValue(234)}
        >
          CONVERT
        </Button>{" "}
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          {conversionValue}
        </p>
      </div>
    </>
  );
}

export default App;

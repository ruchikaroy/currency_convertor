import { ChangeEvent } from "react";

export interface Props {
  currencyOptions: string[];
  selectedCurrency: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencyConvertor = ({
  currencyOptions,
  selectedCurrency,
  onChange,
}: Props) => {
  return (
    <>
      <div className="row" style={{ padding: "20px", width: "500px" }}>
        <select
          value={selectedCurrency}
          onChange={onChange}
          className="form-control"
          style={{ marginLeft: "10px", border: "solid 1px", padding: "10px" }}
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CurrencyConvertor;

export interface Props {
  currencyOptions: string[];
}

const CurrencyConvertor = ({ currencyOptions }: Props) => {
  return (
    <>
      <div className="row" style={{ padding: "20px", width: "500px" }}>
        <select
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

import { useState, FormEvent, CSSProperties } from "react";

const formStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
};

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotal(value + total);
  };

  const handleChangeValue = (e: FormEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleAdd} style={formStyles}>
        <input type="number" value={value} onChange={handleChangeValue} />
        <button type="submit">Add</button>
        <output>Total: {total}</output>
      </form>
    </>
  );
};

export default Calculator;

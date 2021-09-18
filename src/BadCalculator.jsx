import { useState } from "react";

const formStyles = {
  display: "flex",
  flexDirection: "colunm",
  alignItems: "start",
};

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    setTotal(value + total);
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
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

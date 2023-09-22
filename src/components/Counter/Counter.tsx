import React, { useCallback, useState } from "react";
import { MAX_COUNT, MIN_COUNT } from "../../constant";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<string>("1");

  const handleIncreasAmount = useCallback(() => {
    setCount((c) => (c + Number(amount) > MAX_COUNT ? c : c + Number(amount)));
  }, [amount]);
  const handleDecreaseAmount = useCallback(() => {
    setCount((c) => (c - Number(amount) < MIN_COUNT ? c : c - Number(amount)));
  }, [amount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
  };

  return (
    <>
      <label htmlFor="amount">
        클릭시 변화시킬 Count :
        <input id="amount" value={amount} onChange={handleInputChange} />
      </label>
      <button onClick={handleIncreasAmount}>Increase Count</button>
      <button onClick={handleDecreaseAmount}>Decrease Count</button>
      <br />
      Count : <span data-testid="counter">{count}</span>
    </>
  );
}

export default Counter;

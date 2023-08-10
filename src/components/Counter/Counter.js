import React, { useCallback, useState } from 'react'
import { MAX_COUNT, MIN_COUNT } from '../../constant';

function Counter() {
  const [count, setCount] = useState(0);
  const [amount,setAmount] = useState(1);

  const handleIncreasAmount = useCallback(() => {
    setCount(c => c + amount > MAX_COUNT ? c : c + Number(amount))
  },[amount]);
  const handleDecreaseAmount = useCallback(() => {
    setCount(c => c - amount < MIN_COUNT ? c : c - Number(amount))
  },[amount]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAmount(_ => value === '' ? '': Number(value));
  }


  return (
      <>
      <label htmlFor='amount'>
        클릭시 변화시킬 Count :     
        <input id='amount' value={amount} onChange={handleInputChange} />
      </label>
        <button onClick={handleIncreasAmount}>Increase Count</button>
        <button onClick={handleDecreaseAmount}>Decrease Count</button>
        <br />
        Count : <span data-testid="counter">{count}</span>
      </>
  )
}

export default Counter
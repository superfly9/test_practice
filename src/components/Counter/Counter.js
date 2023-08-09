import React, { useCallback, useState } from 'react'
import { MAX_COUNT, MIN_COUNT } from '../../constant';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseAmount = useCallback(() => {
    setCount(c => c >= MAX_COUNT ? c : c+1 )
  },[]);
  const decreaseAmount = useCallback(() => {
    setCount(c => c <= MIN_COUNT ? 0 : c-1)
  },[]);

  return (
      <>
        <button onClick={increaseAmount}>Increase Count</button>
        <button onClick={decreaseAmount}>Decrease Count</button>
        <br />
        Count : <span data-testid="counter">{count}</span>
      </>
  )
}

export default Counter
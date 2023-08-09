import React, { useCallback, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const increaseAmount = useCallback(() => setCount(c => c+1),[]);
  const decreaseAmount = useCallback(() => setCount(c => c-1),[]);

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
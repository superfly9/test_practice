import React, { useCallback, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  const handleClick = (callback) => {
    setCount(callback);
  }

  const increaseAmount =  useCallback((count)=>count+ 1,[]);
  const decreaeAmount = useCallback((count)=>count - 1,[]);

  return (
      <>
        <button onClick={()=>handleClick(increaseAmount)}>Increase Count</button>
        <button onClick={()=>handleClick(decreaeAmount)}>Decrease Count</button>
        <br />
        Count : <span data-testid="counter">{count}</span>
      </>
  )
}

export default Counter
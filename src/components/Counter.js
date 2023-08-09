import React, { useCallback, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  const handleClick = (callback) => {
    setCount(callback);
    // count => count + 1
  }

  const increaseAmount =  useCallback((count)=>count+ 1,[]);
  const decreaeAmount = useCallback((count)=>count - 1,[]);

  return (
      <>
        <button onClick={()=>handleClick(increaseAmount)}>Increase Count</button>
        <button onClick={()=>handleClick(decreaeAmount)}>Decrease Count</button>
        <br />
        Count :{count}
      </>
  )
}

export default Counter
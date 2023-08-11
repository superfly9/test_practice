import { useState } from 'react'

function useInputChange(initialValue) {
const [value,setValue] = useState(initialValue || '');

const handleReset = () => {
  setValue(initialValue);
}

const handleChange = (e) => {
  const { target : {value} } = e;
  setValue(value);
}
  return [value, handleChange, handleReset]
}

export default useInputChange
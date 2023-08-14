import { useState } from 'react'

function useInputChange(initialValue:string) {
const [value,setValue] = useState(initialValue || '');

const handleReset = () => {
  setValue(initialValue);
}

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  const { target : {value} } = e;
  setValue(value);
}
  return [value, handleChange, handleReset] as const
}

export default useInputChange
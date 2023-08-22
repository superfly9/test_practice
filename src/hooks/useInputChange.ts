import { useState } from 'react'
import useDebounce from './useDebounce';

function useInputChange(initialValue:string,isDebounce?:boolean) {
  const [value,setValue] = useState(initialValue || '');
  const deboucedVal = useDebounce(value)
  const handleReset = () => {
    setValue(initialValue);
  }

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  const { target : {value} } = e;
  setValue(isDebounce ? deboucedVal : value);
}
  return [value, handleChange, handleReset] as const
}

export default useInputChange
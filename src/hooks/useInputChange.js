import { useState } from 'react'

function useInputChange(initialValue , validatorCallback ,  { errorMsg, initialErrMsg }) {
const [value,setValue] = useState(initialValue || '');
const [error,setError] = useState(initialErrMsg || '');

const handleReset = () => {
  setValue(initialValue);
}

const handleChange = (e) => {
  const { target : {value} } = e;
  const needValidation = validatorCallback && typeof validatorCallback === 'function';
  let isValid = true;
  if(needValidation) {
    isValid = validatorCallback(value)
  }
  setError(isValid ? error : errorMsg);
  setValue(value);
}
  return [value, handleChange, handleReset, error]
}

export default useInputChange
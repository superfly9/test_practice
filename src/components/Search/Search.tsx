import React, { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ label, value, onChange }: Props) {
  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        name="search"
        value={value}
        onChange={onChange}
        type="text"
      />
    </>
  );
}

export default Search;

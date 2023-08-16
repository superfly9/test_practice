import React from "react";

interface Props {
  label: string;
  terms: string;
  onChange: () => void;
}

function Search({ label, terms, onChange }: Props) {
  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        name="search"
        value={terms}
        onChange={onChange}
        type="text"
      />
    </>
  );
}

export default Search;

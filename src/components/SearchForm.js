import React from 'react';

function SearchForm({ value, onChange, onSearch, disabled }) {
  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <input
        className="search-form__input"
        type="text"
        name="city"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search city (e.g., Toronto, Tokyo, Paris)"
        aria-label="City name"
        disabled={disabled}
      />
      <button className="search-form__button" type="submit" disabled={disabled}>
        {disabled ? 'Searching…' : 'Update'}
      </button>
    </form>
  );
}

export default SearchForm;


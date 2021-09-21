import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// assets
import iconSearch from '../../../assets/ic-search.png';
// Styles
import './InputSearch.scss';
// Utils
import utils from '../../utils';

export default function InputSearch() {
  const history = useHistory();
  const location = useLocation();
  const initialValueInput = utils.getSearchQueryParam(location.search);
  const [inputValueSearch, setInputValueSearch] = useState(initialValueInput);

  function handleChangeInput(event) {
    const { value } = event.target;
    setInputValueSearch(value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (inputValueSearch) {
      history.push(`/items?search=${inputValueSearch}`);
    }
  }

  return (
    <form onSubmit={handleSearchSubmit} className="input-search__form">
      <input
        className="input-search__input"
        placeholder="Nunca dejes de buscar"
        value={inputValueSearch}
        onChange={handleChangeInput}
      />
      <button type="submit" className="input-search-button">
        <img src={iconSearch} alt="icon search" />
      </button>
    </form>
  );
}

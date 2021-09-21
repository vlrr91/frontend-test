import React from 'react';
import { Link } from 'react-router-dom';
import InputSearch from '../../../../components/InputSearch';
// assets
import logoBrand from '../../../../../assets/logo-meli.png';
// Styles
import './MainHeader.scss';

export default function MainHeader() {
  return (
    <header className="header__main">
      <div className="content-header__main">
        <Link to="/">
          <img src={logoBrand} alt="logo mercado libre" className="header__logo" />
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}

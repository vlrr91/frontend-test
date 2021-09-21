import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from './components/MainHeader';
// Styles
import './MainLayout.scss';

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="main-layout">
        {children}
      </main>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

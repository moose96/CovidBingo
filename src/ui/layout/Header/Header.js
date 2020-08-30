import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

function Header({ children }) {
  return(
    <header>
      <h1>CovidBingo</h1>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header;
import React from 'react';
import PropTypes from 'prop-types';

import './CaseElement.scss';

function CaseElement({ title, value }) {
  return(
    <div className="case__element">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}

CaseElement.defaultProps = {
  value: '0'
}

CaseElement.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default CaseElement;
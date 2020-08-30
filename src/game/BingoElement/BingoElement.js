import React from 'react';
import PropTypes from 'prop-types';

import './BingoElement.scss';

function BingoElement({ index, value, onChange, stroke, onClick }) {
  const handleChange = event => {
    onChange(index, event.target.value);
  }

  const handleClick = () => {
    onClick(index);
  }

  return (
    <div className="bingo__element">
      <input className={`${stroke && 'stroke'}`} type="number" value={value !== 0 ? value : ''} onChange={handleChange} />
      {value !== 0 && !stroke &&
        <button onClick={handleClick}>x</button>}
    </div>
  );
}

BingoElement.defaultProps = {
  value: ''
}

BingoElement.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BingoElement;
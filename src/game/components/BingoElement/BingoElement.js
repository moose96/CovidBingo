import React from 'react';
import PropTypes from 'prop-types';

import './BingoElement.scss';

function BingoElement({ index, value, onChange, state, onStateChange }) {
  const handleChange = event => {
    if (state === 0) {
      onChange(index, event.target.value);
    }
  }

  const handleClick = () => {
    onStateChange(index, 2);
  }

  const handleBlur = () => {
    if (value !== 0 && state < 2) {
      onStateChange(index, 1);
    }
  }

  return (
    <div className="bingo__element">
      <input
        className={`${state === 2 && 'stroke'}`}
        type="number"
        value={value !== 0 ? value : ''}
        onChange={handleChange}
        onBlur={handleBlur} />
      {value !== 0 && state < 2 &&
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
  onChange: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
  onStateChange: PropTypes.func.isRequired
}

export default BingoElement;
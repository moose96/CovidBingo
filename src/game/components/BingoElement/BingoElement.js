import React from 'react';
import PropTypes from 'prop-types';

import './BingoElement.scss';
import '../../../styles/fontello.scss';

function BingoElement({ style, index, value, onChange, state, onStateChange }) {
  const handleChange = event => {
    if (state === 0) {
      let value = event.target.value;

      if (value === '') {
        value = 0;
      }

      onChange(index, value);
    }
  }

  const handleClick = () => {
    onStateChange(index, 2);
  }

  const handleBlur = () => {
    if (value !== 0 && value !== '' && state < 2) {
      onStateChange(index, 1);
    }
  }

  return (
    <div className="bingo__element">
      <input
        className={`${state === 2 && 'stroke'}`}
        style={style}
        type="number"
        value={value !== 0 ? value : ''}
        onChange={handleChange}
        onBlur={handleBlur} />
      {value !== 0 && state < 2 &&
        <button onClick={handleClick}>
          {/* <span className="icon icon-cancel" /> */}
          x
        </button>}
    </div>
  );
}

BingoElement.defaultProps = {
  value: ''
}

BingoElement.propTypes = {
  style: PropTypes.object,
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
  onStateChange: PropTypes.func.isRequired
}

export default BingoElement;
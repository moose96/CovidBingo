import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BingoElement from '../BingoElement';
import "./BingoBoard.scss";

class BingoBoard extends React.Component {
  constructor(props) {
    super(props);

    let _values = [];
    let _states = [];

    for (let i = 0; i < props.size ** 2; i++) {
      _values.push(0);
      _states.push(0);
    }

    this.state = {
      values: _values,
      states: _states
    }
  }

  handleChange = (index, value) => {
    let _values = this.state.values;
    _values[index] = value;
    this.setState({
      values: _values
    });
  }

  handleStateChange = (index, state) => {
    let _states = this.state.states;
    _states[index] = state;
    this.setState({
      states: _states
    })
  }

  render() {
    const { values, states } = this.state;
    // const { size } = this.props;
    return (
      <div className="bingo__board">
       {values.map((element, index) =>
       <BingoElement
          key={`bingo-element-${index}`}
          index={index}
          value={element}
          onChange={this.handleChange}
          state={states[index]}
          onStateChange={this.handleStateChange} />
       )}
     </div>
    )
  }
}

// function BingoBoard({ size }) {
//   const [values, setValues] = useState([]);
//   const [strokes, setStrokes] = useState([]);
//   let elements = [];

//   let _values = [];
//   let _strokes = [];

//   for (let i = 0; i < size ** 2; i++) {
//     _values.push(0);
//     _strokes.push(false);
//   }

//   const handleChange = (index, value) => {
//     let _values = values;
//     _values[index] = value;
//     setValues(_values);
//   }

//   const handleClick = index => {
//     let _strokes = strokes;
//     _strokes = [...strokes, index];
//     setStrokes(_strokes);
//   }

//   for (let i = 0; i < size ** 2; i++) {
//     console.log('test');
//     elements.push(
//       <BingoElement
//         key={`bingo-element-${i}`}
//         index={i}
//         value={values[i]}
//         onChange={handleChange}
//         stroke={strokes[i]}
//         onClick={handleClick} />
//     );
//   }

//   return(
//     <div className="bingo__board">
//       {elements}
//     </div>
//   );
// }

BingoBoard.propTypes = {
  size: PropTypes.number.isRequired
}

export default BingoBoard;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BingoElement from '../BingoElement';
import "./BingoBoard.scss";

class BingoBoard extends React.Component {
  constructor(props) {
    super(props);

    let _values = [];
    let _strokes = [];

    for (let i = 0; i < props.size ** 2; i++) {
      _values.push(0);
      _strokes.push(false);
    }

    this.state = {
      values: _values,
      strokes: _strokes
    }
  }

  handleChange = (index, value) => {
    let _values = this.state.values;
    _values[index] = value;
    this.setState({
      values: _values
    });
  }

  handleClick = index => {
    let _strokes = this.state.strokes;
    _strokes[index] = true;
    this.setState({
      strokes: _strokes
    })
  }

  render() {
    const { values, strokes } = this.state;
    // const { size } = this.props;
    return (
      <div className="bingo__board">
       {values.map((element, index) =>
       <BingoElement
          key={`bingo-element-${index}`}
          index={index}
          value={element}
          onChange={this.handleChange}
          stroke={strokes[index]}
          onClick={this.handleClick} />
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
import React from 'react';
import PropTypes from 'prop-types';

import withContainer from '../../containers/BingoBoardContainer';
import BingoElement from '../BingoElement';
import "./BingoBoard.scss";

class BingoBoard extends React.Component {
  constructor(props) {
    super(props);

    this.initBoard();
  }

  initBoard() {
    let _values = [];
    let _states = [];
    const arraySize = this.props.size ** 2;

    if (this.props.values.length !== arraySize && this.props.states.length !== arraySize) {
      for (let i = 0; i < arraySize; i++) {
        _values.push(0);
        _states.push(0);
      }

      // this.state = {
      //   values: _values,
      //   states: _states
      // }
      this.props.setValues(_values);
      this.props.setStates(_states);
    }
  }

  handleChange = (index, value) => {
    let _values = [...this.props.values];
    _values[index] = value;
    // this.setState({
    //   values: _values
    // });
    this.props.setValues(_values);
  }

  handleStateChange = (index, state) => {
    let _states = [...this.props.states];
    _states[index] = state;
    // this.setState({
    //   states: _states
    // })
    this.props.setStates(_states);
  }

  componentDidUpdate() {
    this.initBoard();
  }

  render() {
    // const { values, states } = this.state;
    const { values, states } = this.props;
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
    );
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

export default withContainer(BingoBoard);
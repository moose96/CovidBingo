const BINGO_SET_VALUES = 'bingo/BINGO_SET_VALUES';
const BINGO_SET_STATES = 'bingo/BINGO_SET_STATES';
// const BINGO_SET_VALUE = 'bingo/BINGO_SET_VALUE';
// const BINGO_SET_STATE = 'bingo/BINGO_SET_STATE';
// const BINGO_STATE_FREE = 0;
// const BINGO_STATE_READONLY = 1;
// const BINGO_STATE_STROKE = 2;

const INITIAL_STATE = {
  values: [],
  states: []
}

// export function setValue(index, value)

export function setValues(values) {
  return {
    type: BINGO_SET_VALUES,
    values
  }
}

export function setStates(states) {
  return {
    type: BINGO_SET_STATES,
    states
  }
}

export function setTest() {
  return {
    type: 'bingo/test'
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BINGO_SET_VALUES:
      return {
        ...state,
        values: action.values
      }
    case BINGO_SET_STATES:
      return {
        ...state,
        states: action.states
      }
    default:
      return state;
  }
}
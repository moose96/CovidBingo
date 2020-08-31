import { combineReducers } from 'redux';

import bingoReducer from '../game/containers/BingoBoardContainer/redux';

export default combineReducers({
  bingo: bingoReducer
});
import {combineReducers} from 'redux';

import commonReducers from './commonReducers';

const appReducer = combineReducers({
  common: commonReducers,
});

export default appReducer;

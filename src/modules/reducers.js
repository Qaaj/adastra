
// when passing a FUNCTION to dispatch -> it's an Action Creator
//    - first argument of the RETURN function of an Action Creator is the dispatch object
// When passing an OBJECT to dispatch -> it's an Action

import { combineReducers } from 'redux'

import graphql from './GraphLoader';
import appVars from './AppVars';


const rootReducer = combineReducers({
  graphql,
  appVars
});


export default rootReducer

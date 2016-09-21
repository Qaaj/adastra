import {Map} from 'immutable';

const TOGGLE_KEY = 'globe/app-vars/TOGGLE_KEY';

const startMap = new Map({
  fullscreen: false,
})

export default function reducer(state = startMap, action) {

  switch (action.type) {
    case TOGGLE_KEY:
      state = state.set(action.data, (state.get(action.data) ? false : true));
      debug("Toggling key: ", action.data, state.get(action.data));
      return state;
      break;
    default:
      return state
  }
}

export function toggleItem(type) {
  return {
    type: TOGGLE_KEY,
    data: type
  };
}



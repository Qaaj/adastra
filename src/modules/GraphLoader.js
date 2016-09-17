import {Map, fromJS} from 'immutable';

const immutableState = Map({
  fetching: false,
  data: Map({})
})

const STARTING_REQUEST = 'graph/loader/STARTING_REQUEST';
const FINISHED_REQUEST = 'graph/loader/FINISHED_REQUEST';

let currentProtocol = window.location.protocol;
let host = window.location.host;


let API_HOST = `${currentProtocol}//${host}/app/`;

export default function reducer(state = new Map({}), action){
  switch (action.type) {
    case STARTING_REQUEST:
      return state.set("fetching", true);
    case FINISHED_REQUEST:
        console.log(action);
      return state.set("fetching", false)
          .set("data", Map(action.response.data.goldberg));
    default:
      return state
  }
}

const startingRequest = () => {
  return {
    type: STARTING_REQUEST
  }
}
const finishedRequest = (response) => {
  return {
    type: FINISHED_REQUEST,
    response: response
  }
}

export const getGraph = (payload) => {
  return dispatch => {
    dispatch(startingRequest());
    return new Promise(function(resolve, reject) {
      let request=new XMLHttpRequest();
      request.open("POST", "/graphql", true);
      request.setRequestHeader("Content-Type",
          "application/graphql");
      request.send(payload);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText)
        }
      }
    }).then(response =>
        dispatch(finishedRequest(JSON.parse(response))))
  }
}

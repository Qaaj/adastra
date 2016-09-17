import React from "react";
import ReactDOM from "react-dom";
import Query from './src/components/Query';
import {Provider} from "react-redux";
import configureStore from './src/store/configureStore';

const store = configureStore();

const Main = React.createClass({
  render: () => {
    return (
      <Provider store={store}>
        <Query />
      </Provider>
    )
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById("example")
);


// docker rm $(docker ps -a -q)
// docker kill $(docker ps -q)
//  docker run --name adastra-psql -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres
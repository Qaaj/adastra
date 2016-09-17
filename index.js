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
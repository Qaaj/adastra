/**
 * Created by Jaaq on 9/17/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {getGraph} from '../modules/GraphLoader';

class Query extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(
      getGraph("{goldberg(id: 2) {id, character, actor}}")
    );
  }

  render() {
    return <div>
        Go to: <a target="_blank" href="http://localhost:8080">GraphiQL</a>.
      <p>Enter: <code>&#123;user(id: 1) &#123;id, first_name, last_name, email&#125;&#125;</code></p>

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
};
export default connect(
  mapStateToProps
)(Query);

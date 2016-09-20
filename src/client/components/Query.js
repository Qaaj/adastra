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
    console.log(this.props);
    return <div>Hi</div>
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

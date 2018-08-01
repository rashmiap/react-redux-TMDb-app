import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: (state.movies),
    shows: (state.shows),
    ownProps
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;

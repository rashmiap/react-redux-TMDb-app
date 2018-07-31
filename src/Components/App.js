import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return{
    movies: state.movies,
    shows: state.shows,
    comments: state.comments,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;

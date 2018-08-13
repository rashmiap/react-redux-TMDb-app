import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
    castDetails: state.castDetails,
    shows: state.shows,
    currentMovie: state.currentMovie,
    currentShow: state.currentShow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// const mapStateToPropsdo = (state, ownProps) => {
//   return {
//     movies: (state.movies),
//     shows: (state.shows),
//     ownProps
//   }
// }
//
// function mapDispatchToPropsdo(dispatch){
//   return bindActionCreators(actionCreators, dispatch);
// }
const mapStateToProps = (state) => {
  return {
        responseItem: state.fetchSuccess,
        hasErrored: state.fetchErrored,
        isLoading: state.fetchIsLoading,
        movies: state.movies,
        shows: state.shows,
  };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;

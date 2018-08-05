import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    responseItem: state.fetchSuccess,
    hasErrored: state.fetchErrored,
    isLoading: state.fetchIsLoading,
    fullDetails: state.fetchDetailsSuccess,
    isCastLoading: state.fetchCastIsLoading,
    hasCastErrored: state.fetchCastDataErrored,
    castDetails: state.fetchCastSuccess,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;

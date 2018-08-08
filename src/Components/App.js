import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    responseItem: state.responseItem,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
    fullDetails: state.fullDetails,
    isCastLoading: state.isCastLoading,
    hasCastErrored: state.hasCastErrored,
    castDetails: state.castDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;

import React, { Component } from 'react';
import '../App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 2
}
function reducer(state = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return{
        count: state.count + 1
      }
    case "DECREMENT":
      if(state.count < 1){
        return state;
      }
      else{
        return{
          count: state.count - 1
        }
      }
    default:
      return state;
  }
  return state;
}
const store = createStore(reducer);
// dispatch pass an object
//store.dispatch({type: "INCREMENT"});
//store.dispatch({type: "DECREMENT"});

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Counter count={32} />
      </Provider>
    )
  }
}
export default App;

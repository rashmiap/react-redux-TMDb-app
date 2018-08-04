//a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state
const initialState = [];

export function movies(state = [], action){
  switch(action.type){
    case 'TOGGLE_SAVEd': {
      console.log('toggle save card');
      console.log(action.id);
      console.log(state);
      const index = action.index;
      return state.map(movies => {
        console.log(movies);

        if(movies.id !== action.index){
          return movies;
        }
        return {
          ...movies,
          saved: !movies.saved
        }
      })
    }
    default:
      return state;
  }
}

export function fetchErrored(state = false, action) {
  switch (action.type) {
    case 'FETCH_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function fetchIsLoading(state = false, action) {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function fetchSuccess(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':{
      return {
      ...action.responseItem,
      results: action.responseItem.results.map(
        (content, i) => i != 1 ? {...content, saved: false}: {...content, saved: false}
      )
    }
  }
  default:
    return state;
  }
}
export function toggleSaveCard(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_SAVE':{
      console.log(action.index);
      return [
        ...state,{
          saved : !action.saved,
        }
      ]
   }
      // return {
      //   ...action.responseItem,
      //   results: action.responseItem.results.map(
      //     (content, i) => i != 1 ? {...content, saved: true}: {...content, saved: true}
      //   )
      // }

    default:{
      return state;
    }
  }
}

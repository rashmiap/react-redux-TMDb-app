//a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state

export function movies(state = [], action){
  switch(action.type){
    case 'TOGGLE_SAVE': {
      console.log('toggle save card');
      const index = action.index;
      return state.map(movies => {
        if(movies.id !== action.index){
          return movies;
        }
        return {
          ...movies,
          saved: !movies.saved
        }
      })
    }
    //return the updated state
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
    case 'FETCH_DATA_SUCCESS':
      return action.responseItem;
    default:
      return state;
  }
}

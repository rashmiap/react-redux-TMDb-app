//a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state
export function movies(state = [], action){
  switch(action.type){
    case 'TOGGLE_SAVE':
      console.log('toggle save card');
      console.log(state,action);
      return state;
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
        item => Object.assign({}, item, { saved: false })
      )
    }
  }
  default:
    return state;
  }
}
export function fetchDetailsSuccess(state = [], action) {
  switch (action.type) {
    case 'FETCH_DETAILS_SUCCESS':{
      console.log(action.fullDetails);
      return {
        ...action.fullDetails
      }
  }
  default:
    return state;
  }
}

export function fetchCastDataErrored(state = false, action) {
  switch (action.type) {
    case 'FETCH_CAST_ERRORED':
      return action.hasCastErrored;
    default:
      return state;
  }
}

export function fetchCastIsLoading(state = false, action) {
  switch (action.type) {
    case 'FETCH_CAST_LOADING':
      return action.isCastLoading;
    default:
      return state;
  }
}

export function fetchCastSuccess(state = [], action) {
  switch (action.type) {
    case 'FETCH_CAST_SUCCESS':{
      return {
        ...action.castDetails
      }
  }
  default:
    return state;
  }
}

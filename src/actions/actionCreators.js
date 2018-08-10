import * as types from '../constants/ActionTypes';

//save and unsave favorite movie card
export function toggleSaveCard(index){
  return{
    type: types.TOGGLE_SAVE,
    index,
  }
}
export function toggleShowCard(index){
  return{
    type: types.TOGGLE_SHOW_SAVE,
    index,
  }
}
export function fetchDataErrored(bool) {
  return {
    type: types.FETCH_HAS_ERRORED,
    hasErrored: bool
  };
}

export function fetchIsLoading(bool) {
  return {
    type: types.FETCH_IS_LOADING,
    isLoading: bool
  };
}

export function fetchDataSuccess(item, movieType) {
  if(movieType == 'movie') {
    return {
      type: types.FETCH_DATA_SUCCESS,
      movies: item,
    }
  }
  else{
    return {
      type: types.FETCH_SHOWS_SUCCESS,
      shows: item,
    };
  }
}

export function fetchData(url, movieType) {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => dispatch(fetchDataSuccess(item, movieType)))
      .catch(() => dispatch(fetchDataErrored(true)));
  }
}
export function fetchCastIsLoading(bool){
  return {
    type: types.FETCH_CAST_LOADING,
    isCastLoading: bool
  };
}
export function fetchCastDataErrored(bool) {
  return {
    type: types.FETCH_CAST_ERRORED,
    hasCastErrored: bool
  };
}
export function fetchCastSuccess(item) {
  return {
    type: types.FETCH_CAST_SUCCESS,
    castDetails: item,
  };
}
export function fetchCastData(url){
  return (dispatch) => {
    dispatch(fetchCastIsLoading(true));
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchCastIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => dispatch(fetchCastSuccess(item)))
      .catch(() => dispatch(fetchCastDataErrored(true)));
  }
}

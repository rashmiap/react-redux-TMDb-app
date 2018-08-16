import * as types from '../constants/ActionTypes';

//save and unsave favorite movie card
export function toggleSaveCard(cardId){
  return{
    type: types.TOGGLE_SAVE,
    cardId
  }
}
export function toggleDetailSaveCard(cardId){
  return{
    type: types.TOGGLE_DETAIL_SAVE,
    cardId
  }
}
//save and unsave favorite show card
export function toggleShowCard(cardId){
  return{
    type: types.TOGGLE_SHOW_SAVE,
    cardId,
  }
}
export function toggleDetailShowCard(cardId){
  return{
    type: types.TOGGLE_DETAIL_SHOW,
    cardId,
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
export function fetchCastSuccess(item) {
  return {
    type: types.FETCH_CAST_SUCCESS,
    castDetails: item,
  };
}
export function fetchCastData(url){
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
      .then((item) => dispatch(fetchCastSuccess(item)))
      .catch(() => dispatch(fetchDataErrored(true)));
  }
}
export function fetchCurrentMovie(movieId, movies){
  return {
    type: types.FETCH_CURRENT_MOVIE,
    movieId,
    movies: movies.results,
  }
}
export function fetchCurrentShow(movieId, shows){
  return {
    type: types.FETCH_CURRENT_SHOW,
    movieId,
    shows: shows.results,
  }
}

//save and unsave favorite movie card
export function toggleSaveCard(index){
  return{
    type: 'TOGGLE_SAVE',
    index,
  }
}
export function fetchDataErrored(bool) {
  return {
    type: 'FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function fetchIsLoading(bool) {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  };
}

export function fetchDataSuccess(item) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    responseItem: item,
  };
}

export function fetchData(url) {
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
      .then((item) => dispatch(fetchDataSuccess(item)))
      .catch(() => dispatch(fetchDataErrored(true)));
  }
}
export function fetchDetailsSuccess(item) {
  return {
    type: 'FETCH_DETAILS_SUCCESS',
    fullDetails: item,
  };
}
export function fetchDetailsData(url) {
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
      .then((item) => dispatch(fetchDetailsSuccess(item)))
      .catch(() => dispatch(fetchDataErrored(true)));
  }
}
export function fetchCastIsLoading(bool){
  return {
    type: 'FETCH_CAST_LOADING',
    isCastLoading: bool
  };
}
export function fetchCastDataErrored(bool) {
  return {
    type: 'FETCH_CAST_ERRORED',
    hasCastErrored: bool
  };
}
export function fetchCastSuccess(item) {
  return {
    type: 'FETCH_CAST_SUCCESS',
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

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
    item
  };
}
// 
// export function fetchData(url) {
//   return (dispatch) => {
//     dispatch(fetchIsLoading(true));
//     fetch(url)
//       .then((response) => {
//         if(!response.ok) {
//           throw Error(response.statusText);
//         }
//         dispatch(fetchIsLoading(false));
//         return response;
//       })
//       .then((response) => response.json())
//       .then((item) => dispatch(fetchDataSuccess(item)))
//       .catch(() => dispatch(fetchDataErrored(true)));
//   }
// }

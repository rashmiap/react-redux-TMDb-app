export function castDetails(state = [], action) {
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

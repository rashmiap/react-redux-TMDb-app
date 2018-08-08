export function fullDetails(state = [], action) {
  switch (action.type) {
    case 'FETCH_DETAILS_SUCCESS':{
      return {
        ...action.fullDetails
      }
  }
  default:
    return state;
  }
}
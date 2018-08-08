export function responseItem(state = [], action){
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
      ...action.responseItem,
      results: action.responseItem.results.map(
        item => Object.assign({}, item, { saved: false })
      )
    }
  case 'TOGGLE_SAVE':
    return {
      ...state,
      results: state.results.map(
           (content, i) => i == action.index ? {...content, saved: !content.saved}
                                   : content
       )
    };
  default:
    return state;
  }
}

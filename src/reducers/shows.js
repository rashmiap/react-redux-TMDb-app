export function shows(state = [], action){
  switch (action.type) {
    case 'FETCH_SHOWS_SUCCESS':
      return {
      ...action.shows,
      results: action.shows.results.map(
        item => Object.assign({}, item, { saved: false })
      )
    }
    case 'TOGGLE_SHOW_SAVE':
      return {
        ...state,
        results: state.results.map(
             (content, i) => i === action.index ? {...content, saved: !content.saved}
                                     : content
         )
      };
  default:
    return state;
  }
}

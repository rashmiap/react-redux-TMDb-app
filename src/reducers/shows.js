import { FETCH_SHOWS_SUCCESS, TOGGLE_SHOW_SAVE } from '../constants/ActionTypes'

export function shows(state = [], action){
  switch (action.type) {
    case FETCH_SHOWS_SUCCESS:
      return {
      ...action.shows,
      results: action.shows.results.map(
        item => Object.assign({}, item, { saved: false })
      )
    }
    case TOGGLE_SHOW_SAVE:
      return {
        ...state,
        results: state.results.map(
             (content) => content.id === action.cardId ? {...content, saved: !content.saved}
                                     : content
         )
      };
  default:
    return state;
  }
}

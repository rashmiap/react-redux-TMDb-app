import { FETCH_DATA_SUCCESS, TOGGLE_SAVE } from '../constants/ActionTypes'

export function movies(state = [], action){
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
      ...action.movies,
      results: action.movies.results.map(
        item => Object.assign({}, item, { saved: false })
      )
    }
  case TOGGLE_SAVE:
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

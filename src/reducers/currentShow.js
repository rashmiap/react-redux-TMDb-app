import { FETCH_CURRENT_SHOW } from '../constants/ActionTypes'

export function currentShow(state = [], action){
  switch (action.type) {
    case FETCH_CURRENT_SHOW:
      return action.shows.filter(item => item.id == action.movieId);
  default:
    return state;
  }
}

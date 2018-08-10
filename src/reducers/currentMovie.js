import { FETCH_CURRENT_MOVIE } from '../constants/ActionTypes'

export function currentMovie(state = [], action){
  switch (action.type) {
    case FETCH_CURRENT_MOVIE:
      return action.movies.filter(item => item.id == action.movieId);
  default:
    return state;
  }
}

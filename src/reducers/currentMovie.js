import { FETCH_CURRENT_MOVIE, TOGGLE_DETAIL_SAVE } from '../constants/ActionTypes'

export function currentMovie(state = [], action){
  switch (action.type) {
    case FETCH_CURRENT_MOVIE:
      return action.movies.filter(item => item.id == action.movieId);

    case TOGGLE_DETAIL_SAVE:
      const newState = [...state] // clone the array
      if(newState.length > 0){
        newState[0].saved = !newState[0].saved
        return newState;
      }
      else{
        return state;
      }

    default:
      return state;
  }
}

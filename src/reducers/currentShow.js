import { FETCH_CURRENT_SHOW, TOGGLE_SHOW_SAVE } from '../constants/ActionTypes'

export function currentShow(state = [], action){
  switch (action.type) {

    case FETCH_CURRENT_SHOW:
      return action.shows.filter(item => item.id == action.movieId);

    case TOGGLE_SHOW_SAVE:
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

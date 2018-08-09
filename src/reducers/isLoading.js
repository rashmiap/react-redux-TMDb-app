import { FETCH_IS_LOADING } from '../constants/ActionTypes'

export function isLoading(state = false, action) {
  switch (action.type) {
    case FETCH_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

import { FETCH_CAST_LOADING } from '../constants/ActionTypes'

export function isCastLoading(state = false, action) {
  switch (action.type) {
    case FETCH_CAST_LOADING:
      return action.isCastLoading;
    default:
      return state;
  }
}

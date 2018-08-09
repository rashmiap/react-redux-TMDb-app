import { FETCH_CAST_ERRORED } from '../constants/ActionTypes'

export function hasCastErrored(state = false, action) {
  switch (action.type) {
    case FETCH_CAST_ERRORED:
      return action.hasCastErrored;
    default:
      return state;
  }
}

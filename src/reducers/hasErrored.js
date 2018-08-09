import { FETCH_HAS_ERRORED } from '../constants/ActionTypes'

export function hasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

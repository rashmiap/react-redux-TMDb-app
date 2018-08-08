//a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state
export function hasCastErrored(state = false, action) {
  switch (action.type) {
    case 'FETCH_CAST_ERRORED':
      return action.hasCastErrored;
    default:
      return state;
  }
}

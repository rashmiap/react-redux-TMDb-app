//a reducer takes in 2 things
// 1. action (info about what happened)
// 2. copy of current state

function movies(state = [], action){
  switch(action.type){
    case 'TOGGLE_SAVE': {
      console.log('toggle save card');
      const index = action.index;
      return state.map(movies => {
        if(movies.id !== action.index){
          return movies;
        }
        return {
          ...movies,
          saved: !movies.saved
        }
      })
    }
    //return the updated state
    default:
      return state;
  }
}

export default movies;

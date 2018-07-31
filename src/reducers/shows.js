function shows(state = [], action){
  switch(action.type){
    case 'TOGGLE_SAVE': {
      console.log('toggle save card');
      const index = action.index;
      return state.map(shows => {
        if(shows.id !== action.index){
          return shows;
        }
        return {
          ...shows,
          saved: !shows.saved
        }
      })
    }
    //return the updated state
    default:
      return state;
  }
}

export default shows;

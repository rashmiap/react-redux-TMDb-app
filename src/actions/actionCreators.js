//increment
export function increment(index){
  return{
    type: 'INCREMENT_LIKES',
    index: index
  }
}

//save and unsave favorite movie card
export function toggleSaveCard(index){
  return{
    type: 'TOGGLE_SAVE',
    index,
  }
}

const resultPredicted = (state=[], action) => {
  switch(action.type){
    case "PREDICT_PRICE": 
      return state.result = 200
    default:
      return state
  }
}
default export resultPredicted

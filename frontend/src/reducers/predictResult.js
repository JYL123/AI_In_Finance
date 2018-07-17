const resultPredicted = (state=[], action) => {
  switch(action.type){
    case "PREDICT_PRICE": 
      return {
        result: action.stock //troubleshooting
      }
    default:
      return state
  }
}

export default resultPredicted

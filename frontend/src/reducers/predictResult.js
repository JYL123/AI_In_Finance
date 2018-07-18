const resultPredicted = (state={ result : 300}, action) => {
  console.log(JSON.stringify(action["type"]))
  switch(action.type){
    case "PREDICT_PRICE": 
      console.log("reducer1"+ JSON.stringify(state))
      return {
        result: action["stock"]
      }
    default:
    console.log("reducer2" + JSON.stringify(state))
      return state
  }
}

export default resultPredicted

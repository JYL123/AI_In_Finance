//var trainedValue = require ('../../../backend/retrieveData')
const mongoose = require('mongoose')

const resultPredicted = (state={ result : 300}, action) => {

  console.log(state)
  console.log(JSON.stringify(action.type))
  
  switch(action.type){
    case "PREDICT_PRICE": 
      console.log("reducer1: "+ JSON.stringify(state))
      return {
        result: getPrice(action.date, action.stock)
      }
    default:
      console.log("reducer2: " + JSON.stringify(state))
      return state
  }
}


const getPrice = (date, stock) => {
  //fake value to return to 
  //this data should be gotten from the training model based on database 
  return 3000
}

export default resultPredicted

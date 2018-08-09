const resultPredicted = (state={ result : 300}, action) => {

  console.log(state)
  console.log(JSON.stringify(action.type))

  /* This is a post url example to post data to mongo db (post data to express) */
  // fetch('http://localhost:3001/api/searchStock', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     stock: action.stock,
  //     date: action.date,
  //   })
  // })

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
  //http://localhost:3001/api/stocks?stock=AAPL&date=2016/1/1
  //http://localhost:3001/api/stocks?stock=AAPL&date=213
  //get data from database
  fetch(`http://localhost:3001/api/stocks?stock=${stock}&date=${date}`)
      .then(
        console.log (date + ", " + stock + " are received from the user input." )
      )
  //fake value to return to 
  //this data should be gotten from the training model based on database 
  //console.log (date + ", " + stock + " are received from the user input." )
  return 3000
}

export default resultPredicted




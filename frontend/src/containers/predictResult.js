import React from 'react'
import { connect } from 'react-redux';
import { predictPrice } from '../actions/predictResult'
import { bindActionCreators } from 'redux'
//import ResultDisplay from '../components/resultDisplay'

const PredictResult = ({ dispatch }) => {
  let inputDate
  let inputStock
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        // if (!inputDate.value.trim() || inputStock.value.trim()) {
        //   return
        // }
        
        predictPrice(inputDate.value, inputStock.value)
        console.log(JSON.stringify(predictPrice(inputDate.value, inputStock.value)))
        inputDate.value = ''
        inputStock.value = ''
      }}>
      
        Date: <input ref={node => inputDate = node} /><br></br><br></br>
        Stock: <input ref={node => inputStock = node} /><br></br><br></br>
        <button type="submit" >
          Predict Price
        </button>
      </form>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     result: state.result
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    predictPrice: predictPrice
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(PredictResult)

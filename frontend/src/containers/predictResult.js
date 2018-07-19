import React from 'react'
import { connect } from 'react-redux';
import { predictPrice } from '../actions/predictResult'
import { bindActionCreators } from 'redux'
import store from '../index'

const PredictResult = () => {
  let inputDate
  let inputStock
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        
        store.dispatch(predictPrice(inputDate.value, inputStock.value))
        //predictPrice(inputDate.value, inputStock.value)
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
    predictPrice
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(PredictResult)

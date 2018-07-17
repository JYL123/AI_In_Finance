import React from 'react'
import { connect } from 'react-redux';
import { predictPrice } from '../actions/predictResult'

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
        console.log("inputDate: "+ inputDate.value)
        dispatch(predictPrice(inputDate.value, inputStock.value))
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

const mapStateToProps = state => {
  return {
    result: state.result
  }
}

console.log("check value: " + mapStateToProps.result)

const mapDispatchToProps = (dispatch) => {
  predictPrice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictResult)

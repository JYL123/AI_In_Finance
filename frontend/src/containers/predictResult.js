import React from 'react'
import { connect } from 'react-redux'
import { predictResult } from '../actions'

const PredictResult = { dispatch } => {
  let inputDate
  let inputStock
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputDate.value.trim() || inputStock.value.trim()) {
          return
        }
        dispatch(predictResult(inputDate.value, inputStock.value))
        inputDate.value = ''
        inputStock.value = ''
      }}>
      
        <input ref={node => inputDate = node} />
        <input ref={node => inputStock = node} />
        
        <button type="submit">
          Predict Price
        </button>
      </form>
    </div>
  )
}

export default connect()(PredictResult)

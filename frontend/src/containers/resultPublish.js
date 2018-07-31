import React from 'react'
import { connect } from 'react-redux';
import { predictPrice } from '../actions/predictResult'
import { bindActionCreators } from 'redux'

const ResultPublish = ({ result }) => (
    <div> 

      This is the result: { result } 
    </div>
  )

const mapStateToProps = state => {

  console.log("Get result from current state is: " + state["resultPredicted"]["result"])

  return {
    result: state["resultPredicted"]["result"]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    predictPrice: predictPrice
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPublish)

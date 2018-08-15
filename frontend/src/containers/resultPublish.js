import React from 'react'
import { connect } from 'react-redux';
import { predictPrice } from '../actions/predictResult'
import { bindActionCreators } from 'redux'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ResultPublish = ({ result }) => (
  <div>
  <CardContent>
    <Typography component="p">
      This is the result: { result } 
    </Typography >
  </CardContent>
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

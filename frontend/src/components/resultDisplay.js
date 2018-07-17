import React from 'react'
import PropTypes from 'prop-types'

const ResultDisplay = ({ result }) => (
  <div> This is the result: { result } </div>
)

ResultDisplay.propTypes = {
  result: PropTypes.number
}

export default ResultDisplay
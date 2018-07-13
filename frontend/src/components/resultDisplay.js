import React from 'react'
import PropTypes from 'prop-types'

const ResultDisplay = ({ result }) => (
  <div> { result } </div>
)

ResultDisplay.propTypes = {
  result: PropTypes.number.isRequired
}

export default ResultDisplay

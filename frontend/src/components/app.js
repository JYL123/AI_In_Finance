import React from 'react'
import PredictResult from '../containers/predictResult'
import ResultPublish from '../containers/resultPublish'
import { Train, Model, Dense } from 'tfjsx'

const App = () => (
    <div>
        <PredictResult />
        <ResultPublish />
    </div>
)

export default App
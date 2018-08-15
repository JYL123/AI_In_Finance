import React from 'react'
import PredictResult from '../containers/predictResult'
import ResultPublish from '../containers/resultPublish'
import Card from '@material-ui/core/Button';

const App = () => (
    <div>
        <Card>
            <PredictResult />
            <ResultPublish />
        </Card>
    </div>
)

export default App
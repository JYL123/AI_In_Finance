import React from 'react'
import PredictResult from '../containers/predictResult'
import ResultPublish from '../containers/resultPublish'
import { Train, Model, Dense } from 'tfjsx'

function* trainDataGenerator() {
    yield { x: 1, y: 1};
    yield { x: 4, y: 4};
    yield { x: 8, y: 8};
}

function MyTrainedModel() {
    return (
        <Train
            trainData = {trainDataGenerator} // data is supposed to be polled from database
            epochs={15}
            batchSize={3}
            samples={3}
            onTraineND={model => model.describe() }
            train
            display
        >
            <Model optimizer='sgd' loss='meanSquaredError'>
                <Dense units={1} inputShape={[1]}/>
            </Model>
        </Train>
    )
}

const App = () => (
    <div>
        <PredictResult />
        <ResultPublish />
        <MyTrainedModel />
    </div>
)

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import { Train, Model, Dense } from 'tfjsx'

function* trainDataGenerator() {
    yield { x: 1, y: 1};
    yield { x: 4, y: 4};
    yield { x: 8, y: 8};
}

function MyTrainedModel() {
    return (
        <Train
            trainData = {trainDataGenerator}
            epochs={15}
            batchSize={3}
            samples={3}
            onTraineND={MODEL => model.describe() }
            train
            display
        >
            <Model optimizer='sgd' loss='meanSquaredError'>
                <Dense units={1} inputShape={[1]}/>
            </Model>
        </Train>
    );
}

ReactDOM.render(<MyTrainedModel />, document.getElementById('app'));
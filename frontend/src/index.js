import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import pricePredictApp from './reducers'
import App from './components/app';

const store = createStore(pricePredictApp)

//store.dispatch({type: "PREDICT_PRICE", date: "3123", stock: 123})

console.log("state is: " + JSON.stringify(store.getState()))
console.log("initial state result is: " + store.getState()["resultPredicted"]["result"])

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)



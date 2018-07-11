import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)



//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

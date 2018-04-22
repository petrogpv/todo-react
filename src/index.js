import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './components/Root';
import registerServiceWorker from './utils/registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/reducers';




function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action);
        const returnValue = next(action);
    console.log('state after dispatch', getState());
        return returnValue;
    }
};


let store = createStore(
    appReducer,
    applyMiddleware(logger, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

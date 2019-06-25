// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// CSS
import './index.css';

// CONTAINERS
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// REDUX
// import {createStore} from 'redux';
import { Provider } from 'react-redux';
import mainReducer from "./reducers/mainReducer";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(mainReducer, composeWithDevTools());

const Routes = (
    <BrowserRouter>
        <Provider store = {Store}>
            <Switch>
                <Route path="/" component={App} exact />
                {/* <Route path='*' component={NotFoundError} /> */}
            </Switch>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

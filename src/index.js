import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../src/App.css'
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'


const store = createStore(reducer,middleware)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

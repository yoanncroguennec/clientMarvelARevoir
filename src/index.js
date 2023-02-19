import React from 'react';
import ReactDOM from 'react-dom';
// APP
import App from './app/App';
// REDUX
import { Provider } from 'react-redux'
import store from './app/utils/redux/Store'
// STYLES
import "./app/utils/assets/styles/sass/Index.scss"


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

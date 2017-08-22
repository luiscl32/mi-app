/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import config from './configuration/configureStore';
import {BrowserRouter as Router} from 'react-router-dom';
/**
|--------------------------------
|         ASSETS
|--------------------------------
*/
import './styles/index.css';
/**
|--------------------------------
|         COMPONENTES
|--------------------------------
*/
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
/**
|--------------------------------
|         VARIABLES
|--------------------------------
*/
let store = config.configureStore();
/**
|--------------------------------
|         RENDER
|--------------------------------
*/
render(
    <Provider store={store}>
      <Router>
        <AppRoutes/>
      </Router>
    </Provider>

  ,
  document.getElementById('root'));
registerServiceWorker();

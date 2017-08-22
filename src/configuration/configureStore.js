import {createStore, applyMiddleware} from 'redux';
import Reducer from '../reducers';
import thunk from 'redux-thunk';

class config {
  static configureStore(){
    let store = createStore(Reducer,applyMiddleware(thunk));
    return store;
  }
}


export default config;

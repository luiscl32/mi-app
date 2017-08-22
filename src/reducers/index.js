import {combineReducers} from 'redux';
/**
|---------------------------------------------------
|COMICS
|---------------------------------------------------
*/
import comicsReducers from './comicsReducers';
/**
|---------------------------------------------------
|            combineReducers
|---------------------------------------------------
*/
export default combineReducers({
  /**------------------COMICS---------------------*/
  comics: comicsReducers
});

/**
|---------------------------------------------------
|                     DEPENDENCIAS
|---------------------------------------------------
*/
import {COMICS_FETCH, COMICS_FETCH_SUCCESS, COMICS_FETCH_FAILED} from '../constans';
const initialState = {
  comics: [],
  isFetching: true,
  error: false

};
/**
|---------------------------------------------------
|                     reducers
|---------------------------------------------------
*/
const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case  COMICS_FETCH:
      return {
        ...state,
        comics: [],
        isFetching: true,
        error: false
      }
    case  COMICS_FETCH_SUCCESS:
      return {
        ...state,
        comics: action.data,
        isFetching: false,
        error: false
      }
    case  COMICS_FETCH_FAILED:
      return {
        ...state,
        comics:[],
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
};

export default comicsReducer;

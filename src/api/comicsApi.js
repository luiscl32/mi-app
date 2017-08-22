/**
|---------------------------------------------------
|                     DEPENDENCIAS
|---------------------------------------------------
*/
import axios from 'axios';
var crypto = require('crypto-js');
/**
|---------------------------------------------------
|                     CONSTANTES
|---------------------------------------------------
*/
const URL = 'http://gateway.marvel.com/v1/public/characters';
const APIKEY = 'd298f8f70506d4b5cac15d7274e46c60';
const PRIVATEKEY = '7594ab70d4bd7319bcdc18380aa1d2b149b4d0cd';
const TS = 1;
const hash = crypto.MD5(TS + PRIVATEKEY + APIKEY );
const APIURL = URL +'?ts=' + TS + '&apikey=' + APIKEY + '&hash=' + hash;
/**
|---------------------------------------------------
|                     class
|---------------------------------------------------
*/
class comicsApi {
  //get comics

  static getComics = (id) =>{
    return axios.get(APIURL)
    .then((response) =>{
      return response.data.data.results;
    })
    .catch((err) =>{
      console.log(err);
    });
  }
}
/**
|---------------------------------------------------
|                     export
|---------------------------------------------------
*/
export default comicsApi;

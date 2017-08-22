/**
|---------------------------------------------------
|                     DEPENDENCIAS
|---------------------------------------------------
*/
import {COMICS_FETCH,COMICS_FETCH_FAILED,COMICS_FETCH_SUCCESS} from '../constans';
import apiComics from '../api/comicsApi';
/**
|---------------------------------------------------
|                     fetchingData
|---------------------------------------------------
| la funcion se encarga de realizar una lectura de
| los datos de solicitud a la api, en caso de ser
| una respuesta (success) devolvera el objeto en
| formato json en caso contrario devolvera un error
|---------------------------------------------------
*/
export const comicsFetchingData = () => {
  return {
    type: COMICS_FETCH
  }
}


export const comicsFetchDataSuccess = data => {
  return {
    type: COMICS_FETCH_SUCCESS,
    data
  }
}

export const comicsFetch = (id) => {
  return ((dispatch) =>{
    dispatch(comicsFetchingData());
    //obetener datos de la api
  return  apiComics.getComics(id)
      .then((response) =>{
        console.log(comicsFetchDataSuccess(response));
          dispatch(comicsFetchDataSuccess(response));
      })
      .catch((err)=>{
        console.log(err);
      })
  })
}

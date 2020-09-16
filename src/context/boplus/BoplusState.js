import React, {useReducer} from 'react';
//
import boplusContext from './boplusContext';
import boplusReducer from './boplusReducer';
//Importamos la libreria AXIOS
import axios from 'axios';
//import TYPES
import {PETICION_IMAGENES_RADIO} from '../../type/index';
//-----------------------------------------------------
const BoplusState = (props) => {
  const initialState = {
    imagenesradio: null,
    imagenestv: null,
    imagenespublicidad: null,
  };
  const [state, dispatch] = useReducer(boplusReducer, initialState);
  //
  const funcionPeticionImagenRadio = async () => {
    try {
      const urlImagenRadio =
        'https://boplus.tv/api/siteWeb/request/peticionInformacionRadio.php';
      const peticion = await axios.get(urlImagenRadio);
      const respuestaImagenRadio = peticion.data;
      console.log(respuestaImagenRadio.length);

      if (respuestaImagenRadio.length !== 0) {
        //Retornamos el ARREGLO con la informacion
        return respuestaImagenRadio;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const funcionPeticionImagenTv = async () => {
    try {
      const urlImagenRadio =
        'https://boplus.tv/api/siteWeb/request/peticionInformacionTv.php';
      const peticion = await axios.get(urlImagenRadio);
      const respuestaImagenTv = peticion.data;
      console.log(respuestaImagenTv.length);

      if (respuestaImagenTv.length !== 0) {
        //Retornamos el ARREGLO con la informacion
        return respuestaImagenTv;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const funcionPeticionImagenPublicidad = async () => {
    try {
      const urlImagenRadio =
        'https://boplus.tv/api/siteWeb/request/peticionInformacionPublicidad.php';
      const peticion = await axios.get(urlImagenRadio);
      const respuestaImagenTv = peticion.data;
      console.log(respuestaImagenTv.length);

      if (respuestaImagenTv.length !== 0) {
        //Retornamos el ARREGLO con la informacion
        return respuestaImagenTv;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <boplusContext.Provider
      value={{
        imagenesradio: state.imagenesradio,
        imagenestv: state.imagenestv,
        imagenespublicidad: state.imagenespublicidad,
        funcionPeticionImagenRadio,
        funcionPeticionImagenTv,
        funcionPeticionImagenPublicidad,
      }}>
      {props.children}
    </boplusContext.Provider>
  );
};

export default BoplusState;

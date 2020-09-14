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
  };
  const [state, dispatch] = useReducer(boplusReducer, initialState);
  //
  const funcionPeticionImagenRadio = async () => {
    try {
      const urlImagenRadio =
        'https://boplus.tv/api/siteWeb/request/peticionInformacion.php';
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
  return (
    <boplusContext.Provider
      value={{
        prueba: state.prueba,
        imagenesradio: state.imagenesradio,
        funcionPeticionImagenRadio,
      }}>
      {props.children}
    </boplusContext.Provider>
  );
};

export default BoplusState;

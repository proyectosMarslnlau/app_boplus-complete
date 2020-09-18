//
import {
  PETICION_IMAGENES_TV,
  PETICION_IMAGENES_ANUNCIO,
} from '../../type/index';
export default (state, action) => {
  switch (action.type) {
    case PETICION_IMAGENES_TV:
      return {
        ...state,
        imagenestv: action.payload,
      };
    case PETICION_IMAGENES_ANUNCIO:
      return {
        ...state,
        imagenespublicidad: action.payload,
      };
    default:
      return state;
  }
};

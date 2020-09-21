//
import {
  PETICION_IMAGENES_TV,
  PETICION_IMAGENES_ANUNCIO,
  PETICION_PUBLICIDAD_PRINCIPAL,
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
    case PETICION_IMAGENES_TV:
      return {
        ...state,
        imagenestv: action.payload,
      };
    case PETICION_PUBLICIDAD_PRINCIPAL:
      return {
        ...state,
        imagenpublicidadprincipal: action.payload,
      };
    default:
      return state;
  }
};

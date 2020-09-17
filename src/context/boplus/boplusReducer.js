//
import {PETICION_IMAGENES_TV} from '../../type/index';
export default (state, action) => {
  switch (action.type) {
    case PETICION_IMAGENES_TV:
      return {
        ...state,
        imagenestv: action.payload,
      };
    default:
      return state;
  }
};

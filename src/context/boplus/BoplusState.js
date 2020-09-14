import React, {useReducer} from 'react';
//
import boplusContext from './boplusContext';
import boplusReducer from './boplusReducer';
//-----------------------------------------------------
const BoplusState = (props) => {
  const initialState = {
    prueba: 'HOLA LENNY',
  };
  const [state, dispatch] = useReducer(boplusReducer, initialState);
  return (
    <boplusContext.Provider
      value={{
        prueba: state.prueba,
      }}>
      {props.children}
    </boplusContext.Provider>
  );
};

export default BoplusState;

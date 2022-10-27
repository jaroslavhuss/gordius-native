import React, { createContext, useReducer, useEffect } from "react";
import GlobalReducer from "./GlobalReducer";

const hlavniState = {
  zobrazitSeparovanouComponentu: false,
  aktivniComponenta: "",
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);

  const vypniZapniSeparovanouComponentu = (bool) => {
    dispatch({
      type: "VYPNI_ZAPNI_COMPONENTU",
      payload: bool,
    });
  };
  const vyberComponentu = (komponenta) => {
    console.log(komponenta);
    dispatch({
      type: "VYBER_COMPONENTY",
      payload: komponenta,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        zobrazitSeparovanouComponentu: state.zobrazitSeparovanouComponentu,
        komponenta: state.aktivniComponenta,
        vypniZapniSeparovanouComponentu,
        vyberComponentu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

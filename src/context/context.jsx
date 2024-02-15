import { createContext, useEffect, useState } from "react";

export const AlergenosContext = createContext();

export const AlimentosContextProvider = ({ children }) => {
  const [alergias, setAlergias] = useState([]);

  return (
    <AlergenosContext.Provider value={{ alergias, setAlergias }}>
      {children}
    </AlergenosContext.Provider>
  );
};

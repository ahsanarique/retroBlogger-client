import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(true);

  return (
    <Context.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

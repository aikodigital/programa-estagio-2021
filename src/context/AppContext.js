import React from "react";

export const AppContext = React.createContext();

export function GeneralContext({ children }) {
  const [linha, setLinha] = React.useState("");
  const [sentido, setSentido] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        linha,
        sentido,
        setLinha,
        setSentido,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

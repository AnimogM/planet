import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isPlanetOpen, setIsPlanetOpen] = useState(false);
  const [isChararacterOpen, setIsChararacterOpen] = useState(false);
  const [active, setActive] = useState("")
  const [activeChar, setActiveChar] = useState("")

  const openPlanet = (id) => {
    setActive(id)
    setIsPlanetOpen(true);
  };
  const closePlanet = () => {
    setActive()
    setIsPlanetOpen(false);
  };

  const openChararacter = (id) => {
    setActiveChar(id)
    setIsChararacterOpen(true);
  };
  const closeChararacter = () => {
    setActiveChar()
    setIsChararacterOpen(false);
  };


  return (
    <AppContext.Provider
      value={{
        isPlanetOpen,
        openPlanet,
        closePlanet,
        active,
        isChararacterOpen,
        openChararacter,
        closeChararacter,
        activeChar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

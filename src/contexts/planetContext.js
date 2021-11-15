import React, { createContext, useState, useContext } from 'react';

const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {

    const[planetList, setPlanetList] = useState([
        { id: 1, img: require('../images/planets/planet-9.svg').default, name: "Planet Alpha"},
        { id: 2, img: require('../images/planets/planet-8.svg').default, name: "Planet Alpha"},
        { id: 3, img: require('../images/planets/planet-7.svg').default, name: "Planet Alpha"},
        { id: 4, img: require('../images/planets/planet-6.svg').default, name: "Planet Alpha"},
        { id: 5, img: require('../images/planets/planet-6.svg').default, name: "Planet Alpha"},
        { id: 6, img: require('../images/planets/planet-5.svg').default, name: "Planet Alpha"},
        { id: 7, img: require('../images/planets/planet-1.svg').default, name: "Planet Alpha"},
        { id: 8, img: require('../images/planets/planet-2.svg').default, name: "Planet Alpha"},
        { id: 9, img: require('../images/planets/planet-2.svg').default, name: "Planet Alpha"},
        { id: 10, img: require('../images/planets/planet-4.svg').default, name: "Planet Alpha"},
        { id: 11, img: require('../images/planets/planet-3.svg').default, name: "Planet Alpha"},
        { id: 12, img: require('../images/planets/planet-5.svg').default, name: "Planet Alpha"},
    ])
    return (
        <PlanetContext.Provider value={{ planetList, setPlanetList }}>
            {children}
        </PlanetContext.Provider>
    )
}

export const usePlanetContext = () => {
    return useContext(PlanetContext);
  };
  

export { PlanetContext, PlanetProvider}
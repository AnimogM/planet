import { createContext, useState } from 'react';
import Image  from '../components/Image';

export const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {

    const[charList, setCharList] = useState([
        { id: 1, img: Image.character7, name:"Brooklyn Simmons"},
        { id: 2, img: Image.character1, name:"Cameron Williamson"},
        { id: 3, img: Image.character2, name:"Leslie Alexander"},
        { id: 4, img: Image.character8, name:"Kristin Watson"},
        { id: 5, img: Image.character5, name:"Jenny Wilson"},
        { id: 6, img: Image.character12, name:"Marvin McKinney"},
        { id: 7, img: Image.character6, name:"Jerome Bell"},
        { id: 8, img: Image.character4, name:"Guy Hawkins"},
        { id: 9, img: Image.character10, name:"Robert Fox"},
    ])

    return (
        <CharacterContext.Provider value={{charList, setCharList}}>
            { children }
        </CharacterContext.Provider>
    )
}

export { CharacterProvider };
import React, { useState, useContext, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const CoctailContext = React.createContext();

const CoctailProvider = ({children}) => {

  const [coctails, setCoctails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCoctails = async () => {
    setLoading(true)
    const resp = await fetch(`${url}${searchTerm}`);
    const data = await resp.json();
    // console.log(data);
    const drinks = data.drinks;
    if(drinks){
      // console.log(drinks);
      const searchedCoctails = drinks.map(current => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass} = current;
        return {id, name, image, info, glass}
      });
      // console.log(searchedCoctails);
      setCoctails(searchedCoctails);
      setLoading(false)
    }else{
      setCoctails([]);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoctails();
  }, [searchTerm])


  
  return (
    <CoctailContext.Provider value={{loading, coctails, setLoading, setSearchTerm}}>
      {children}
    </CoctailContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(CoctailContext)
}

export { CoctailContext, CoctailProvider }
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useGlobalContext } from './context'
import Loading from './Loading'

function CoctailPage() {
  const { setLoading } = useGlobalContext();
  const { id } = useParams();
  const [coctail, setCoctail] = useState(null);

  const fetchCoctail = async () => {
    setLoading(true)
    const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await resp.json();

    if(data){
      
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strDrinkThumb: image,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];

      const coctail = {
        name,
        category,
        info,
        image,
        glass,
        instructions,
        ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
      }
      setCoctail(coctail);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoctail();
  }, [])

  if(!coctail){
    return <Loading />
  }

  const { name, category, info, image, glass, instructions, ingredients } = coctail;

  return (
    <section className="coctail-page">
      <h1>{name}</h1>
      <div className="coctail-page-info-wrapper">
        <img src={image} alt={name}/>
        <div className="coctail-page-info">
          <h2><span className="coctail-atr">Name:</span> {name}</h2>
          <h2><span className="coctail-atr">Category:</span> {category}</h2>
          <h2><span className="coctail-atr">Info:</span> {info}</h2>
          <h2><span className="coctail-atr">Glass:</span> {glass}</h2>
          <h2><span className="coctail-atr">Instructions:</span> {instructions}</h2>
          <h2><span className="coctail-atr">Ingredients:</span> {ingredients.map((current, index) => current ? <span key={index}> {current}</span> : null)}</h2>
        </div>
      </div>
    </section>
  )
}

export default CoctailPage

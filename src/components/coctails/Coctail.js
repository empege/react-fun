import React from 'react'
import { Link } from 'react-router-dom'

function Coctail({id, name, image, info, glass}) {
  return(
    <section key={id} className="coctail">
      <img src={image} alt={name}/>
      <div className="coctail-info">
        <h3>{name}</h3>
        <p>{info}</p>
        <p>{glass}</p>
        <button className="btn"><Link to={`/coctails/coctail/${id}`}>Details</Link></button>
      </div>
    </section>
  )

}

export default Coctail

import React from 'react'
import { useGlobalContext } from './context'
import Loading from './Loading'
import Coctail from './Coctail'

function ResultList() {
  const { coctails, loading } = useGlobalContext();
  
  if(loading){
    return <Loading />
  }
  if(coctails.length < 1){
    return (
      <section className="coctails-result-wrapper">
        <h1>{`No Coctails found :(`}</h1>
      </section>
    )
  }
  return (
    <section className="coctails-result-wrapper">
      <h1>Coctails:</h1>
      <div className="coctails-result">
        {
          coctails.map(current => {
            return <Coctail key={current.id} {...current}/>
          })
        }
      </div>
    </section>
  )
}

export default ResultList

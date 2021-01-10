import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext()

  const coctailsInput = useRef();

  const searchCoctails = () => {
    const newTerm = coctailsInput.current.value;
    setSearchTerm(newTerm);
  }

  const handleForm = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    coctailsInput.current.focus();
  }, [])
  return (
    <section className="search-form">
      <h3>Search your favourite coctail:</h3>
      <form className="c-form" onSubmit={handleForm}>
        <input type="text" ref={coctailsInput} onChange={searchCoctails}/>
      </form>
    </section>
  )
}

export default SearchForm

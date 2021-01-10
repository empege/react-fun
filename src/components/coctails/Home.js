import React from 'react'
import SearchForm from './SearchForm'
import ResultList from './ResultList'

function CoctailsHome() {
  return (
    <main className="coctails-home">
      <SearchForm />
      <ResultList />
    </main>
  )
}

export default CoctailsHome

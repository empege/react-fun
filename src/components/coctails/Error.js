import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="coctails-about">
      <h1>Stop right there!🚫</h1>
      <h2>Actually, it's a dead end anyways😅</h2>
      <button className="btn coctails-btn">
        <Link className="coctails-btn-link" to='/coctails/'>Go Home</Link>
      </button>
    </section>
  )
}

export default Error

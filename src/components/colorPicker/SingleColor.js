import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor, onChange }) => {
  const [alert, setAlert] = useState(false)

  const [colorName, setColorName] = useState('');

  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      <form onSubmit={(e) => onChange(e, colorName, hexValue)}>
        <input type="text" placeholder='Name this color...' value={colorName} onChange={(e)=>setColorName(e.target.value)}/>
        <button type="submit">Save it!</button>
      </form>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
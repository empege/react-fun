import React, { useState, useEffect } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
import '../../App.css'

function App() {

  const [color, setColor] = useState('crimson')
  const [tint, setTint] = useState(10)
  const [list, setList] = useState(new Values('crimson').all(10))

  const savedColors = JSON.parse(localStorage.getItem('myColors')) ? JSON.parse(localStorage.getItem('myColors')) : [{ name: 'red', color: '#ff0000' }, { name: 'blue', color: '#0000ff' }, { name: 'white', color: '#fff' }];
  localStorage.setItem('myColors', JSON.stringify(savedColors));

  const [savedList, setSavedList] = useState(savedColors);

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(tint)
      setList(colors)
    } catch (error) {
      console.log(error)
      alert(`Sorry but this wasn't a proper hex code.\nUse '#' at the start and check if the code is corrent.`);
    }
  }

  const copyColor = (e, color) => {
    const savedColors = Array.from(document.querySelectorAll('.saved-color'));
    savedColors.forEach(current => {
      current.classList.remove('copied-one');
    });
    e.currentTarget.classList.add('copied-one');
    navigator.clipboard.writeText(color)
  }

  const removeColor = (e) => {
    e.stopPropagation();
    const deleteColorName = e.target.parentNode.getAttribute('color-name');
    setSavedList(() => savedList.filter(current => current.name !== deleteColorName));
  }

  const addColor = (e, name, hex) => {
    e.preventDefault();
    console.log(e, name, hex)
    setSavedList([...savedList, { name, color: hex }])
  }

  useEffect(() => {
    localStorage.setItem('myColors', JSON.stringify(savedList));
  }, [savedList])

  return (
    <main id="color-picker-main">
      <div className="title">
        <h1>Ivan's Color Picker 🎨</h1>
        <h2>## Hex only ##</h2>
        <h3>(So long other pickers that don't let me choose 1% color tint and shade! Ha!)</h3>
      </div>



      {/* Ceo grid */}
      <section className="colorPicker-main-grid">

        <section className="color-main-left">
          {/* forma */}
          <form className="color-form" style={{ background: color }} onSubmit={handleSubmit}>

            {/* boja */}
            <div className="flex-column">
              <label htmlFor="color-input">Input hex or a properly named color: </label>
              <input type="text" id="color-input" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            {/* tint i shade */}
            <div className="flex-column">
              <label htmlFor="tint-input">{`Input tint & shade % (input number from 1 to 100 and see what you get)`}</label>
              <input type="number" id="tint-input" min="1" max="100" value={tint} onChange={(e) => setTint(Number(e.target.value))} />
            </div>

            <button className="btn" type="submit">Get your color!</button>

          </form>

          {/* dole gde se prikazuju boje */}
          <section className='colors'>
            {list.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexColor={color.hex}
                  onChange={addColor}
                />
              )
            })}
          </section>

        </section>

        {/* Gde se cuvaju boje i tu vide */}
        <section className="color-main-right">
          <h2>Saved colors:</h2>
          <section>
            {savedList.map((current, index) => {
              const { name, color } = current;
              return (
                <article
                  key={index}
                  className="saved-color flex-row"
                  style={{ background: `${color}` }}
                  color-name={name}
                  onClick={(e) => { copyColor(e, color) }}
                >
                  <div className="">
                    <div className="flex-row">
                      <h4>Name:&nbsp;</h4>
                      <h3>{name}</h3>
                    </div>
                    <div className="flex-row">
                      <h4>Color:&nbsp;</h4>
                      <h3>{color}</h3>
                    </div>
                    <p>Click to Copy</p>
                  </div>
                  <button className="remove-color-btn" onClick={removeColor}>X</button>
                </article>
              )
            })}
          </section>
        </section>


      </section>
    </main>
  );
}

export default App;
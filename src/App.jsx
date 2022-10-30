import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Menu } from './components/NavBar/Menu'

function App() {

  return (
    <div className="App">
      <Menu/>
      <ItemListContainer greeting={"¡Bienvenidos a LaCava.com!"}/>
    </div>
  )
}

export default App

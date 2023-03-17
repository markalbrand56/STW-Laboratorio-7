import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc, Textdescparagraph } from './Textdesc.jsx'
import { CheckItem } from './CheckItem'
import {InfoCards} from "./InfoCards.jsx";
import { Button } from './Button.jsx'
import { Input } from './Input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="logo">
            <img src={duckLogo} alt="DuckDuckGo logo" className="main_logo"/>
        </div>
        <Input/>
        <Textdesc className='textdesc'>
            ¿Cansado de que te rastreen? Podemos ayudarte.
        </Textdesc>
        <Textdescparagraph className='textdesc'> 
          No almacenamos información personal. No te persegimos con anuncios. No te rastreamos nunca.
        </Textdescparagraph>
        <CheckItem />
        <Button className="blue" > Añadir DuckDuckGo a Chrome</Button>
        <Textdescparagraph className='textdescpar'>
        ¡Con la confianza de decenas de millones de personas en todo el mundo!
        </Textdescparagraph>
        <Textdesc className='textdesc'>
        Protección de la Privacidad para Cualquier Dispositivo
        </Textdesc>
        <InfoCards/>
        <Textdesc className='textdesc'>
            No guardamos tu información <br></br> personal. Y nunca lo haremos. 
        </Textdesc>
        <Textdescparagraph className='textdesc'>
        Nuestra política de privacidad es simple: No colectamos <br></br> o compartimos ninguna información personal tuya.
        </Textdescparagraph>
        <Button className="green">Instalar DuckDuckGo </Button>
    </div>
  )
}

export default App

import React from "react"
import duckLogo from "./Logo"
import "./App.css"
import "./CheckItem.css"
import { Textdesc, Textdescparagraph } from "./Textdesc"
import { CheckItem } from "./CheckItem"
import { InfoCards } from "./InfoCards"
import { Button } from "./Button"
import { Input } from "./Input"
import "./fondo.css"

function App() {
  return (
    <div className="App">
      <div className="fondoup">
        <div className="logo">
          <img src={duckLogo} alt="DuckDuckGo logo" className="main_logo" />
        </div>
        <Input />
        <Textdesc className="textdesc">
          ¿Cansado de que te rastreen? Podemos ayudarte.
        </Textdesc>
        <Textdescparagraph className="textdesc">
          No almacenamos información personal. No te perseguimos con anuncios.
          No te rastreamos nunca.
        </Textdescparagraph>
        <CheckItem />
        <Button className="blue">Añadir DuckDuckGo a Chrome</Button>
        <Textdescparagraph className="textdescpar">
          ¡Con la confianza de decenas de millones de personas en todo el mundo!
        </Textdescparagraph>
        <Textdesc className="textdesc">
          Protección de la Privacidad para Cualquier Dispositivo
        </Textdesc>
        <svg
          className="curva"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 134"
        >
          <path
            d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="fondodown">
        <InfoCards />
        <Textdesc className="textdesc">
          No guardamos tu información <br /> personal. Y nunca lo haremos.
        </Textdesc>
        <Textdescparagraph className="textdesc">
          Nuestra política de privacidad es simple: No colectamos
          <br />o compartimos ninguna información personal tuya.
        </Textdescparagraph>
        <Button className="green">Instalar DuckDuckGo </Button>
      </div>
    </div>
  )
}

export default App

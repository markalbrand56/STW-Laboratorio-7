import React from "react"
import "./Input.css"

function Input() {
    return (
        <div>
            <form className="search_form">
                <input
                    className="search_input"
                    placeholder="Busca en la red sin que te rastreen"
                    type="text"
                    tabIndex={0}
                />
                <input className="search_button" type="submit" tabIndex={0} />
            </form>
        </div>
    )
}

export default Input

import "./Header.scss"
import React from "react"

export default function Header() {

    return (
        <header className="flex">
            <img className="parrot" src="/parrot.png" alt="Parrot mascot" />
            <div>
                <h1 className="title-text" >Polyglot</h1>    
                <p>Perfect Translation Every Time</p>
            </div>
        </header>
    )
}
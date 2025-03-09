import React from "react"
import "./Button.scss"

export default function Button({ text = "Click me!", onClick = ()=>{} }) {
    return (
        <button 
            type="button"
            aria-label={text}
            onClick={onClick}>
            {text}
        </button>
    )
}
import React from "react"
import "./Button.scss"

export default function Button({ text = "Click me!", onClick = ()=>{} }) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}
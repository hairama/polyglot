import { React } from "react"
import "./TextArea.scss"


export default function Input({id="", labelName = "", value="", onChange}) {
    
    return (
        <>
            <label  
                htmlFor={value}            
            >{labelName}</label>
            <textarea
                id={id}
                value={value}
                placeholder="How are you?"
                onChange={onChange}
            >
            </textarea>
        </>
    )
}
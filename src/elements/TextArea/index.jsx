import { React } from "react"
import "./TextArea.scss"

export default function Input({id="", labelName = "", value="", error=null, onChange}) {
    const isAnError = error ? "error" : ""
    return (
        <>
            <label  
                htmlFor={id} 
                className={isAnError}           
            >{labelName}</label>
            <textarea className={isAnError}
                id={id}
                value={value}
                placeholder="How are you?"
                onChange={onChange}
            >
            </textarea>
        </>
    )
}
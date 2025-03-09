import React, { useRef, useEffect } from "react";
import "./TextArea.scss";

export default function TextArea({ id="", labelName="", value="", error=null, onChange=()=>{}, readOnly=false }) {
    const textAreaRef = useRef(null);

    // Function to adjust height dynamically
    const handleResize = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"; 
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    };

    // Resize whenever value (from user input) changes
    useEffect(() => {
        handleResize();
    }, [value]); 

    return (
        <>
            <label htmlFor={id} className={error ? "error" : ""}>{labelName}</label>
            <textarea
                ref={textAreaRef}
                className={error ? "error" : ""}
                id={id}
                value={value}
                placeholder="Type here..."
                onChange={(e) => {
                    handleResize(); 
                    onChange(e);
                }}
                readOnly={readOnly}
            />
        </>
    );
}

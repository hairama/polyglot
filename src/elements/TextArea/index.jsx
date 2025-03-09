import React, { useRef, useEffect } from "react";
import "./TextArea.scss";

export default function TextArea({ id="", labelName="", value="", error=null, onChange=()=>{}, readOnly=false }) {
    const textAreaRef = useRef(null);

    // Function to adjust height dynamically
    const handleResize = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"; // Reset height to auto
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"; // Expand based on content
        }
    };

    // Resize whenever value changes (fix for translation being set programmatically)
    useEffect(() => {
        handleResize();
    }, [value]); // Runs whenever 'value' (text content) changes

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
                disabled={readOnly}
                style={{
                    overflow: "hidden",
                    resize: "none", 
                    minHeight: "40px",
                }}
            />
        </>
    );
}

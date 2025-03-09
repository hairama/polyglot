import "./Main.scss";

import { React, useState } from "react";

import TextArea from "/src/elements/TextArea/index";
import SelectLanguage from "/src/elements/SelectLanguage";
import Button from "/src/elements/Button/index";

import use_translation from "../../hooks/use_translation";

export default function Main() {
    const { translation, translateText, loading, error } = use_translation();
    
    const [userText, setUserText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(""); 
    const [isTranslated, setIsTranslated] = useState(false);
    const [formValidationError, setFormValidationError] = useState(null);

    function handleUserInput(userTextValue) {
        if (userTextValue.length >= 45) {
            setFormValidationError("Maximum 45 characters")
        } else {
            setFormValidationError(null)
            setUserText(userTextValue)
        }  
    }
    
    async function handleTranslate() {
        if (!userText) {
            setFormValidationError("Enter text to translate");
            return;
        } else if (!selectedLanguage ) {
            setFormValidationError("Select a language");
            return;
        } else {
            setFormValidationError(null);
            await translateText(userText, selectedLanguage); 
        
            // After successful translation, toggle the translation view
            setIsTranslated(true); 
        }
        
        
    }

    function handleStartOver() {
        setIsTranslated(false)
        setUserText("")
        document.getElementById("TextToTranslate").focus()
    }

    const userInputLabelOrErrorMessage = formValidationError ? formValidationError : "Text to translate 👇"
    const translationOrLoadingOrErrorMessage = (loading === true ) ? (<p>Loading...</p>) : (translation || error)

    return (
        <article>
            <TextArea 
                id="TextToTranslate"
                labelName={userInputLabelOrErrorMessage}
                onChange={(e) => handleUserInput(e.target.value)}
                value={userText}
                error={formValidationError}
                readOnly={isTranslated ? true : false}/>
            {/* Displays translated text when handleTranslate runs successfully */}
            {isTranslated ? (
                <>
                    <TextArea 
                        readOnly={true}
                        labelName="Your translation 👇"
                        value={translationOrLoadingOrErrorMessage}
                        onChange={()=>{}}/>
                    <Button 
                        text="Start Over" 
                        onClick={handleStartOver}/>
                </>
            ) : (
                <>
                    <SelectLanguage 
                        onLanguageChange={setSelectedLanguage}/>
                    <Button 
                        text="Translate" 
                        onClick={handleTranslate}/>
                </>
            )}
        </article>
    );
}

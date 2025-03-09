import "./Main.scss";
import { React, useState } from "react";
import TextArea from "../../elements/TextArea/index";
import SelectLanguage from "../../elements/SelectLanguage";
import Button from "../../elements/Button/index";
import use_translation from "../../hooks/use_translation";

export default function Main() {
    const [userText, setUserText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(""); 
    const [isTranslated, setIsTranslated] = useState(false);
    const { translation, translateText, loading, error } = use_translation();

    async function handleTranslate() {
        // Check that the user entered text to translate AND selected a language
        if (!userText || !selectedLanguage) return;
        // TODO: implement form validation
        await translateText(userText, selectedLanguage); 
        
        // After successful translation, toggle the translation view
        setIsTranslated(true); 
    }

    function handleStartOver() {
        setIsTranslated(false)
        setUserText("")
        document.getElementById("TextToTranslate").focus()
    }

    return (
        <article>
            <TextArea 
                id="TextToTranslate"
                labelName="Text to translate 👇"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                readOnly={false}/>
            {/* Displays translated text when handleTranslate runs successfully */}
            {isTranslated ? (
                <>
                    <TextArea 
                        readOnly={true}
                        labelName="Your translation 👇"
                        value={translation || ""}/>
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
            {/* TODO: move these messages into the TextArea component */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </article>
    );
}

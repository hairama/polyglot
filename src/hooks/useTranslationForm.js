import { useState, useCallback, useRef } from "react";
import useTranslation from "./useTranslation.js";

export default function useTranslationForm() {
    const { translation, translateText } = useTranslation();
    const textAreaRef = useRef(null);
    
    const [userText, setUserText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(""); 
    const [isTranslated, setIsTranslated] = useState(false);
    const [formValidationError, setFormValidationError] = useState(null);

    const handleUserInput = useCallback((userTextValue) => {
        setFormValidationError(userTextValue.length >= 45 ? "Maximum 45 characters" : null);
        setUserText(userTextValue);
    }, []);

    async function handleTranslate() {
        if (!userText) {
            setFormValidationError("Enter text to translate");
            return;
        }
        if (!selectedLanguage) {
            setFormValidationError("Select a language");
            return;
        }

        setFormValidationError(null);
        await translateText(userText, selectedLanguage); 
        setIsTranslated(true);
    }

    function handleStartOver() {
        setIsTranslated(false);
        setUserText("");
        textAreaRef.current?.focus();
    }

    return {
        userText,
        selectedLanguage,
        isTranslated,
        formValidationError,
        translation,
        textAreaRef,
        handleUserInput,
        handleTranslate,
        handleStartOver,
        setSelectedLanguage,
    };
}

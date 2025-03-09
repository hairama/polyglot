import React from "react";
import TextArea from "/src/elements/TextArea/index";
import SelectLanguage from "/src/elements/SelectLanguage";
import Button from "/src/elements/Button/index";

export default function TranslationForm({
    userText,
    isTranslated,
    translation,
    formValidationError,
    handleUserInput,
    handleTranslate,
    handleStartOver,
    setSelectedLanguage,
    textAreaRef,
}) {
    const userInputLabelOrErrorMessage = formValidationError || "Text to translate 👇";

    return (
        <article>
            <TextArea
                id="TextToTranslate"
                labelName={userInputLabelOrErrorMessage}
                onChange={(e) => handleUserInput(e.target.value)}
                value={userText}
                error={formValidationError}
                readOnly={isTranslated}
                ref={textAreaRef}
            />
            
            {isTranslated ? (
                <>
                    <TextArea 
                        readOnly 
                        labelName="Your translation 👇" 
                        value={translation} />
                    <Button 
                        text="Start Over" 
                        onClick={handleStartOver} />
                </>
            ) : (
                <>
                    <SelectLanguage 
                        onLanguageChange={setSelectedLanguage} />
                    <Button 
                        text="Translate" 
                        onClick={handleTranslate} />
                </>
            )}
        </article>
    );
}

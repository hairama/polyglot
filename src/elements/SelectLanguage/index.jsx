import './SelectLanguage.scss'
import React from 'react'
import JpnFlag from "/jp-flag.png"
import SpFlag from "/sp-flag.png"
import FrFlag from "/fr-flag.png"

// TODO: fix language selection bug
export default function SelectLanguage({ onLanguageChange }) {
    // To simulate data coming from an API or preferences/settings page
    const languageArray = [
                {language: "French", flag: FrFlag}, 
                {language: "Spanish", flag: SpFlag}, 
                {language: "Japanese", flag: JpnFlag}
            ]

    const languageRadioButtonJSX = languageArray.map(language => {
        // Creates a lowercase version of language name for key, id, and value attributes
        const languageLowerCase = language.language.toLowerCase()
        return (
            <div className="radio-choice" key={languageLowerCase}>
                <input 
                    type="radio"
                    name="language-selection"
                    id={languageLowerCase}
                    value={languageLowerCase}
                    onChange={(e) => {
                        onLanguageChange(e.target.value)}}
                />
                <label
                    htmlFor={languageLowerCase}
                > {language.language}</label>
                <img src={language.flag} className="flag" alt={`${language.language} flag`}/>
            </div>
        )
    })
    
    return (
        <section>
            <label 
                className='select-language'>Select language 👇</label>
            {languageRadioButtonJSX}
        </section>
    );
}

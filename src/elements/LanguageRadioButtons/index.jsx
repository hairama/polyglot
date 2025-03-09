// import React from "react";
// import './LanguageRadioButtons.scss'
// import JapaneseFlag from "/jpn-flag.png"
// import SpanishFlag from "/sp-flag.png"
// import FrenchFlag from "/fr-flag.png"

// export default function LanguageRadioButtons(onLanguageChange) {
    
//     const languageArray = [
//         {language: "French", flag: FrenchFlag}, 
//         {language: "Spanish", flag: SpanishFlag}, 
//         {language: "Japanese", flag: JapaneseFlag}
//     ]
    
//     const languageRadioButtonJSX = languageArray.map(language => {
//         // Creates a lowercase version of language name for id and value attributes
//         const languageLowerCase = language.language.toLowerCase()
//         return (
//         `<div className="radio-choice">
//                 <input 
//                     type="radio"
//                     name="${language.language}"
//                     id="${languageLowerCase}"
//                     value="${languageLowerCase}"
//                     onChange={(e) => {
//                         ${onLanguageChange}(e.target.value);
//                     }}
//                 />
//                 <label
//                     htmlFor=${languageLowerCase}
//                 > ${language.language}</label>
//                 <img src=${language.flag} className="flag"/>
//             </div>
//         `)
//     })

//     return (
//         <>
//             {languageRadioButtonJSX}
//         </>
//     )}

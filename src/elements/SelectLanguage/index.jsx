import './SelectLanguage.scss'
import React from 'react'
import JpnFlag from "/jp-flag.png"
import SpFlag from "/sp-flag.png"
import FrFlag from "/fr-flag.png"

export default function SelectLanguage({ onLanguageChange }) {
    return (
        <section>
            <label className='select-language'>Select language 👇</label>

            <div className="radio-choice">
                <input 
                    type="radio"
                    name="language"
                    id="french"
                    value="french"
                    onChange={(e) => {
                        console.log("Selected language:", e.target.value);
                        onLanguageChange(e.target.value);
                    }}
                />
                <label> French</label>
                <img src={FrFlag} className="flag"/>
            </div>

            <div className="radio-choice">
                <input 
                    type="radio"
                    name="language"
                    id="spanish"
                    value="spanish"
                    onChange={(e) => {
                        console.log("Selected language:", e.target.value);
                        onLanguageChange(e.target.value);
                    }}
                />
                <label> Spanish</label>
                <img src={SpFlag} className="flag"/>
            </div>

            <div className="radio-choice">
                <input 
                    type="radio"
                    name="language"
                    id="japanese"
                    value="japanese"
                    onChange={(e) => {
                        console.log("Selected language:", e.target.value);
                        onLanguageChange(e.target.value);
                    }}
                />
                <label> Japanese</label>
                <img src={JpnFlag} className="flag"/>
            </div>
        </section>
    );
}

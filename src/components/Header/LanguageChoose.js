import React from "react";

function LanguageChoose({ lg, changeLang }) {
   
    return (
        <div className="header__language">
            <button onClick={() => {changeLang(true, false)}}
                    className={lg.ru ? "lgActive" : ""}
                    >RU</button>

            <button onClick={() => {changeLang(false, true)}}
                    className={lg.kz ? "lgActive" : ""}
                    >KZ</button>
        </div>
    )
}

export default LanguageChoose
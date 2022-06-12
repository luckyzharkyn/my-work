import React from "react";

function ThemeChoose({ lg, theme, changeTheme }) {
   
    return (
        <div className="header__theme">
            <button onClick={() => {changeTheme(true, false)}}
                    className={theme.light ? "ThemeActive" : ""}
                    >{lg.ru ? "Светлая" : "Ак"}</button>

            <button onClick={() => {changeTheme(false, true)}}
                    className={theme.dark ? "ThemeActive" : ""}
                    >{lg.ru ? "Темная" : "Кара"}</button>
        </div>
    )
}

export default ThemeChoose
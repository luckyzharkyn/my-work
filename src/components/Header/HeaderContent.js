import React from 'react';
import LanguageChoose from './LanguageChoose';
import ThemeChoose from "./ThemeChoose";


function HeaderContent({ lg, changeLang, theme, changeTheme }) {
  return ( 
    <header className='header'>
        <ThemeChoose theme={theme} changeTheme={changeTheme} lg={lg}/>
        <LanguageChoose lg={lg} changeLang={changeLang}/>
    </header>
  );
}

export default HeaderContent;
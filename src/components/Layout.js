import React, { useState } from 'react';
import "../css/Layout.css";
import HeaderContent from "./Header/HeaderContent";
import NavContent from './Nav/NavContent';
import MainContent from './Main/MainContent';
import FooterContent from './Footer/FooterContent';

function Layout() {
  const [lg, setLg] = useState({
    ru: true,
    kz: false
  })

  const [theme, setTheme] = useState({
    light: false,
    dark: true
  })

  function changeLang(ruStatus, kzStatus) {
    //меняем язык
    let copy = Object.assign({}, lg);
    copy = {...lg, ru: ruStatus, kz: kzStatus};

    setLg(copy);
  }

  function changeTheme(lightStatus, darkStatus) {
    //меняем язык
    let copy = Object.assign({}, theme);
    copy = {...theme, light: lightStatus, dark: darkStatus};

    setTheme(copy);
  }

  return (
    <div className={theme.light ? "wrapper lightTheme" : "wrapper darkTheme"}>
        <HeaderContent lg={lg} changeLang={changeLang} theme={theme} changeTheme={changeTheme}/>
        <NavContent lg={lg} theme={theme}/>
        <MainContent lg={lg}/>
        <FooterContent lg={lg}/>
    </div>
  );
}

export default Layout;
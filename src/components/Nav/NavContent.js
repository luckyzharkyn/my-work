import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function NavContent({lg, theme}) {
  const [menu, setMenu] = useState([
    {
      textRU: "Список задач",
      textKZ: "Тапсырмалар тізімі",
      link: "/todolist"
    },
    {
      textRU: "Заметки",
      textKZ: "Ескертпелер",
      link: "/noticeApp"
    },
    {
      textRU: "Таблица",
      textKZ: "Кесте",
      link: "/table"
    },
  ])

  const results = menu.map((item, index) => {
    return <li key={index}>
      <NavLink to={item.link}>{lg.ru ? item.textRU : item.textKZ}</NavLink>
    </li>
  })

  return ( 
    <nav className={theme.dark ? "sidebar" : "lightSidebar"}>
        <ul>
          {results}
        </ul>
    </nav>
  );
}

export default NavContent;
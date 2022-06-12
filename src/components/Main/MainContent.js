import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Todolist from './Todolist';
import Notice from "./Notice";
import MyTable from './MyTable';

function MainContent({ lg }) {
  return ( 
    <main className='main'>
      <Routes>
        <Route path='/todolist' element={<Todolist lg={lg}/>}/>
        <Route path='/noticeApp' element={<Notice />} />
        <Route path='/table' element={<MyTable />} />
      </Routes>
    </main>
  );
}

export default MainContent;
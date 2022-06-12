import React, { useState } from 'react';

function Todolist({lg}) {
    const id =()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

    const [edit, setEdit] = useState(null);
    const [obj, setObj] = useState(getInitObj());
    const [notes, setNotes] = useState([
        {
            id: id(),
            title: "text1",
            isFinish: false
        },
        {
            id: id(),
            title: "text2",
            isFinish: false
        },
        {
            id: id(),
            title: "text3",
            isFinish: false
        },
    ])

    function getInitObj() {
        return {
            id: id(),
            title: "",
            isFinish: false
        }
    }

    function changeItem(id, event) {
        setNotes(notes.map(note => {
            if(note.id === id) {
                return {...note, title: event.target.value}
            } else {
                return note;
            }
        }))
    }

    function deleteItem(id) {
        setNotes(notes.filter(note => note.id !== id))
    }

    // function changeActiveText() {
    //     let result = '';

    //     notes.map(note => {
    //         if(note.id === edit) {
    //             return result = "changeItem";
    //         } else {
    //             result = "";
    //         }
    //     })

    //     return result;
    // }

    const results = notes.map(note => {
        return <li key={note.id} className={() => {}}>
            {note.title}
            <button className='changeButton' onClick={() => setEdit(note.id)}>{lg.ru ? "изменить" : "озгерту"}</button>
            <button className='deleteButton' onClick={() => deleteItem(note.id)}>{lg.ru ? "удалить" : "жою"}</button>
        </li>
    })

    function addItem() {        
        if(obj.title != '') {
            setNotes([...notes, obj]);
            setObj(getInitObj());
        }
    }

    function getValue() {
        return notes.reduce((res, note) => {
            if(note.id === edit) {
                return note;
            } else {
                return res;
            }
         }, {}).title;
    }

    let input;
    if(edit) {
        input = <div><input value={edit ? getValue() : ""} 
        onChange={(event) => {changeItem(edit, event)}} /></div>
    } else {
        input = <div><input value={obj.title}
                       onChange={(event) => setObj({...obj, title: event.target.value})} 
                /></div>
    }

    let saveButton;
    if(edit) {
        saveButton = <div><button className='saveButton' onClick={() => setEdit(null)}>{lg.ru ? "сохранить" : "сактау"}</button></div>;
    } else {
        saveButton = <div><button className='saveButton' onClick={() => addItem()}>{lg.ru ? "добавить" : "косу"}</button></div>;
    }

  return ( 
    <div className='main__toDoList'>
        {input}
        {saveButton}
        <div>
            <ul>
                {results}
            </ul>
        </div>
    </div>
  );
}

export default Todolist;
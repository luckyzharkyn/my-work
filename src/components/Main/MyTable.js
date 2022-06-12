import React, { useState } from "react";

function MyTable() {
    const id =()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

    const [mytable, setmyTable] = useState([
        [
            {field: 'name', value: "prod1"},
            {field: 'cost', value: "100"},
            {field: 'catg', value: "catg1"}
        ],
        [
            {field: 'name', value: "prod1"},
            {field: 'cost', value: "100"},
            {field: 'catg', value: "catg1"}
        ],
        [
            {field: 'name', value: "prod1"},
            {field: 'cost', value: "100"},
            {field: 'catg', value: "catg1"}
        ],
        [
            {field: 'name', value: "prod1"},
            {field: 'cost', value: "100"},
            {field: 'catg', value: "catg1"}
        ]
    ])

    const results = mytable.map((note, index) => {
        return <tr key={index}>
            {note.map(field => {
                return <>
                <td>{field.name}</td>
                <td>{field.cost}</td>
                <td>{field.catg}</td>
                </>
            })}
        </tr>
    })

    return <div>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>cost</td>
                    <td>catg</td>
                </tr>
            </thead>
            <tbody>
                {results}
            </tbody>
        </table>
    </div>
}

export default MyTable
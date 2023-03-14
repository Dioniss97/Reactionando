import React, {useEffect, useState} from 'react';

export default function Table() {
    const [data, setData] = useState([]); // useState is a function that returns an array with two elements and the first element is the value of the state and the second element is a 
                                         //  function that can be used to update the state.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json));
    }, [/*dependencias(cada vez que cambie el valor de una dependencia se recarga el componente.)*/]);
    return (
        <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {data.map(row => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.completed ? 'Yes' : 'No'}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}
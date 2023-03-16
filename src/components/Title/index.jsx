import React, {useEffect, useState} from 'react';
import './Title.module.css';

export default function Title({title}) {

    // const [title, setTitle] = useState(['Home']);

    return (
        <div className='title'>
            <h1>{title}</h1>
        </div>
    )
}
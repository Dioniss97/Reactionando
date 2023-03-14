import React, {useEffect, useState} from 'react';
import './Title.module.css';

export default function Title() {

    const [title, setTitle] = useState(['Home', 'About', 'Contact' ]);

    return (
        <div className='title'>
            <h1>{title}</h1>
        </div>
    )
}
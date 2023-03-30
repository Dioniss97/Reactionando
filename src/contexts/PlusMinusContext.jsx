import React, { useState } from 'react';

const Context = React.createContext({});

export function PlusMinusContext ({ children }) {
    const [ plusOrMinus, setPlusOrMinus ] = useState(null);
    const [ count, setCount ] = useState(0);

    return (
        <Context.Provider value={{ plusOrMinus, setPlusOrMinus, count, setCount}}>
            {children}
        </Context.Provider>
    );
}

export default Context;
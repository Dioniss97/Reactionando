import React, { useState } from 'react';

const Context = React.createContext({});

export function CounterContext ({ children }) {
    const [ count, setCount ] = useState(null);

    return (
        <Context.Provider value={{ count, setCount }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
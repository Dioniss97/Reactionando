import React, { useState } from 'react';
import styles from './SearchBar.module.css';
function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault: Es una función que se utiliza para evitar que el navegador realice la acción por defecto de un evento.
    onSubmit(input);
  };

  return (
    <div className={styles.SearchBar}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}
            placeholder="¿Cómo te sientes o qué buscas?"
            />
            <button type="submit">Buscar Películas</button>
        </form>
    </div>
  );
}

export default SearchBar;
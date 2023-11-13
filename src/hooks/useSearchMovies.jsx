import { useState, useEffect } from 'react';
// import gptCall from '../services/gptCall';

export function useSearchMovies (prompt) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    let gptResponse = [];
    
    useEffect(() => {
        gptCall()
        .then((data) => {
            setData(data);
            gptResponse = data.choices;
            console.log(gptResponse);
            
            for (let i = 0; i < gptResponse.length; i++) {
                searchMovies(gptResponse[i].text);
            }
        })
        .catch((error) => {
            setError(error);
        });
    }, []);
    
    return { data, error };
    }
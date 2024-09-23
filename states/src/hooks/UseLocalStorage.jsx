import {useEffect, useState} from 'react';

function useLocalStorage(initialState, key) {
    // функция в момент useState определяет значение из localStorage
    // Function to get value from localStorage during useState initialization
    const get = () => {
        const storage = localStorage.getItem(key);
        return storage ? +storage : initialState;
    };
    const [value, setValue] = useState(get);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export {useLocalStorage};
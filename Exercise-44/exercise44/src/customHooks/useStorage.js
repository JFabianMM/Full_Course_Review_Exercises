import { useState } from 'react';

export default function useStorage() {
    const [localStorageValue, setLocalStorageValue] = useState('');
    const [sessionStorageValue, setSessionStorageValue] = useState('');
    
    const handleSetStorage = (storageType, key,value) => {
        if (storageType=='local'){
            localStorage.setItem(key, value);
            setLocalStorageValue(value);
        }
        if (storageType=='session'){
            sessionStorage.setItem(key, value);
            setSessionStorageValue(value);
        }
    }
    const handleGetStorage = (storageType, key) => {
        if (storageType=='local'){
            let value= localStorage.getItem(key);
            setLocalStorageValue(value);
            return value
        }
        if (storageType=='session'){
            let value= sessionStorage.getItem(key);
            setSessionStorageValue(value);
            return value
        }
    }

    return {
        localStorageValue,
        sessionStorageValue,
        handleSetStorage,
        handleGetStorage
    }
}
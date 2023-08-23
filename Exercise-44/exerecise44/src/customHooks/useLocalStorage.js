import * as React from 'react';
import { useState } from 'react';

export default function useLocalStorage() {
    const [localStorageValue, setLocalStorageValue] = useState('');
    
    const handleSetLocalStorage = (key,value) => {
        localStorage.setItem(key, value);
        setLocalStorageValue(value);
    }
    const handleGetLocalStorage = (key) => {
        let value= localStorage.getItem(key);
        setLocalStorageValue(value);
        return value
    }
    const handleRemoveItemLocalStorage = (key) => {
        localStorage.removeItem(key);
        setLocalStorageValue('');
    }
    const handleRemoveAllLocalStorage = () => {
        localStorage.clear();
        setLocalStorageValue('');
    }
    return {
        localStorageValue,
        handleSetLocalStorage,
        handleGetLocalStorage,
        handleRemoveItemLocalStorage,
        handleRemoveAllLocalStorage
    }
}
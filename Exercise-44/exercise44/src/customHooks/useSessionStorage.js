import { useState } from 'react';

export default function useSessionStorage() {
    const [sessionStorageValue, setSessionStorageValue] = useState('');
    
    const handleSetSessionStorage = (key,value) => {
        sessionStorage.setItem(key, value);
        setSessionStorageValue(value);
    }
    const handleGetSessionStorage = (key) => {
        let value= sessionStorage.getItem(key);
        setSessionStorageValue(value);
        return value
    }
    
    return {
        sessionStorageValue,
        handleSetSessionStorage,
        handleGetSessionStorage
    }
}

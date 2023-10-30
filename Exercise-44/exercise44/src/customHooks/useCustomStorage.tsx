import react, { useState, useEffect } from "react";

type Storage = 'local' | 'session';
type Action = 'get' | 'set';

type E = {
    myId: number;
    message: string;
    myId2: number;
    message2: string;
  };

export const useCustomStorage = <T extends Partial<T>>(): [T | {}, (storageType: Storage, action: Action, key: string, value?: any) => void, (state: T) => void] => {
    const [state, setState] = useState<T | E>({myId: 0, message: 'Nothing', myId2: 0, message2: 'Nothing'});
    
    useEffect(() => {
        setState({myId: 0, message: 'Nothing', myId2: 0, message2: 'Nothing'});
      }, []);

    const setStorage = (storageType: string, action: string, key: string, value: any) => {
        if (action=='set'){
            let variable: string = `${storageType}`+'Storage.'+`${action}`+'Item("'+`${key}`+'", "'+`${value}`+'")';
            eval(String(variable));
        }
        if (action=='get'){
            setState(_s => {
                let variable: string = `${storageType}`+'Storage.'+`${action}`+'Item("'+`${key}`+'")';
                let result:any = eval(String(variable));
                return {
                    ..._s,
                    [key]: result,
                };
            });
        }
    }
    const setEntireState = (data: T) => {
        setState(data);
    }

    return [
        state,
        setStorage,
        setEntireState
    ];
}

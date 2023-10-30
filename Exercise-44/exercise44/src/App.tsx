import './App.css';
import NameInput from './components/NameInput';
import IdInput from './components/IdInput'; 
import useIndexDB from './customHooks/useIndexDB';
import { useEffect } from 'react';
import {useCustomStorage} from './customHooks/useCustomStorage';

type MyExample = {
  myId: number;
  message: string;
  myId2: number;
  message2: string;
};

interface MyExampleState extends Partial<MyExample> { }

function App() {
  const {StartDataBase, StoreNewData} = useIndexDB();
  const [storageState, setStorage, setStorageState] = useCustomStorage<MyExampleState>();

  const clearAllLocal = () => {
    setStorage( 'local', 'set', "myId", 0);
    setStorage( 'local', 'set', "message", "Nothing");
    setStorage( 'local', 'get', "myId")
    setStorage( 'local', 'get', "message")
  }

  const clearAllSession = () => {
    setStorage( 'session', 'set', "myId2", 0);
    setStorage( 'session', 'set', "message2", "Nothing");
    setStorage( 'session', 'get', "myId2")
    setStorage( 'session', 'get', "message2")
  }

  function handleIndexDBStorage(){
    let N = (document.querySelector("#name") as HTMLInputElement).value;
    let I = (document.querySelector("#id") as HTMLInputElement).value
    StoreNewData('CompanyPersonalData', 'Employees', 'name', N, I);
  }

  useEffect(() => {
    let DataBaseName='CompanyPersonalData';
    let storeName='Employees';
    let indexName = 'name';
    StartDataBase(DataBaseName, storeName, indexName);
    setStorageState({myId: 0, message: 'Nothing', myId2: 0, message2: 'Nothing'});
  }, []);

  let key1: any;
  let key2: any;
  let key3: any;
  let key4: any;
  useEffect(() => {
    let array=Object.entries(storageState);
    if (array.length>0){
        key1=array[0][1];
        key2=array[1][1];
        key3=array[2][1];
        key4=array[3][1];
    }
  
    let element1 = (document.getElementById("key1") as HTMLInputElement);
    let element2 = (document.getElementById("key2") as HTMLInputElement);
    element1.textContent = 'The value of key "myId" is: ' + key1;
    element2.textContent = 'The value of key "message" is: ' + key2;

    let element3 = (document.getElementById("key3") as HTMLInputElement);
    let element4 = (document.getElementById("key4") as HTMLInputElement);
    element3.textContent = 'The value of key "myId2" is: ' + key3;
    element4.textContent = 'The value of key "message2" is: ' + key4;   
  }, [storageState]);

  return (
    <>
    <div className="App">
      <div style={{padding:'10px'}}>
          <p><strong>Get Session Stored Value</strong></p>
          <NameInput></NameInput>
          <IdInput></IdInput>
          <button id="btn-guardar" onClick={handleIndexDBStorage}> Save your information </button> 
      </div>
      <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px'}}/>
      <div style={{padding:'10px'}}/>
          <p> <strong>My Custom Hook (Local)</strong></p>          
          <button onClick={() => setStorage( 'local', 'set', "myId", 1)}>Set the key 'myId' to 1</button>
          <button onClick={() => setStorage( 'local', 'get', "myId")}>Get 'myId' value</button>
          <p id='key1' data-testid='resultKey1'></p>

          <button onClick={() => setStorage( 'local', 'set', "message", "HELLO!")}>Set the key 'message' to HELLO!</button>
          <button onClick={() => setStorage( 'local', 'get', "message")}>Get 'message' value </button>
          <p id='key2'></p>
          <button onClick={clearAllLocal}>Go Local to initial values</button> 

          <div style={{padding:'10px'}}/>
          <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px'}}/>
          <div style={{padding:'10px'}}>

          <p><strong>My Custom Hook (Session)</strong></p>          
          <button onClick={() => setStorage( 'session', 'set', "myId2", 2)}>Set the key 'myId2' to 1</button>
          <button onClick={() => setStorage( 'session', 'get', "myId2")}>Get 'myId2' value</button>
          <p id='key3'></p>

          <button onClick={() => setStorage( 'session', 'set', "message2", "HI!")}>Set the key 'message2' to HI!</button>
          <button onClick={() => setStorage( 'session', 'get', "message2")}>Get 'message2' value </button>
          <p id='key4'></p>
          <button onClick={clearAllSession}>Go Session to initial values</button> 
         
      </div>
    </div>

    </>
    
  );
}

export default App;
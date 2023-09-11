import './App.css';
import { useEffect } from 'react';
import useLocalStorage from './customHooks/useLocalStorage';
import useSessionStorage from './customHooks/useSessionStorage';
import useIndexDB from './customHooks/useIndexDB';
import NameInput from './Components/NameInput';
import IdInput from './Components/IdInput';

function App() {
  const {localStorageValue, handleSetLocalStorage, handleGetLocalStorage} = useLocalStorage();
  const {sessionStorageValue, handleSetSessionStorage, handleGetSessionStorage} = useSessionStorage();
  const {StartDataBase, StoreNewData} = useIndexDB();

  useEffect(() => {
    handleSetLocalStorage('fabian', '1');
    handleSetSessionStorage('jesus', '5');

    let DataBaseName='CompanyPersonalData';
    let storeName='Employees';
    let indexName = 'name';
    StartDataBase(DataBaseName, storeName, indexName);
  }, []);

  useEffect(() => {
    handleGetLocalStorage('fabian');
    handleGetSessionStorage('jesus');
  }, [localStorageValue]);
  
  function handleIndexDBStorage(){
    let N = document.querySelector("#name").value;
    let I = document.querySelector("#id").value;
    StoreNewData('CompanyPersonalData', 'Employees', 'name', N, I);
  }

  return (
    <div className="App">
      <div style={{padding:'20px'}}>
          <p>Local Stored Values</p>
          <button onClick={()=>handleSetLocalStorage('fabian', '2')}>Set LocalStorage key: 'fabian', value: '2'</button>
          <p>Get Local Stored Value: {localStorageValue} </p>
      </div>
      <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px'}}/>
    
      <div style={{padding:'20px'}}>
      <p>Session Stored Value</p>
          <button onClick={()=>handleSetSessionStorage('jesus', '6')}>Set LocalStorage key: 'jesus', value: '6'</button>
          <p>Get Session Stored Value: {sessionStorageValue} </p>
      </div>
      <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px'}}/>

      <div style={{padding:'20px'}}>
          <p>Get Session Stored Value</p>
          <NameInput></NameInput>
          <IdInput></IdInput>
          <button id="btn-guardar" onClick={handleIndexDBStorage}> Save your information </button>
      </div>
    </div>
  );
}

export default App;

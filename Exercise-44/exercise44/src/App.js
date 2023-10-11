import './App.css';
import { useEffect } from 'react';
import useStorage from './customHooks/useStorage';
import useIndexDB from './customHooks/useIndexDB';
import NameInput from './Components/NameInput';
import IdInput from './Components/IdInput';

function App() {
  const {localStorageValue, sessionStorageValue, handleSetStorage, handleGetStorage} = useStorage();

  const {StartDataBase, StoreNewData} = useIndexDB();

  useEffect(() => {
    handleSetStorage('local', 'fabian', '1');
    handleSetStorage('session', 'jesus', '5');

    let DataBaseName='CompanyPersonalData';
    let storeName='Employees';
    let indexName = 'name';
    StartDataBase(DataBaseName, storeName, indexName);
  }, []);

  useEffect(() => {
    handleGetStorage('local', 'fabian');
    handleGetStorage('session', 'jesus');
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
          <button onClick={()=>handleSetStorage('local', 'fabian', '2')}>Set LocalStorage key: 'fabian', value: '2'</button>
          <p>Get Local Stored Value: {localStorageValue} </p>
      </div>
      <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px'}}/>
    
      <div style={{padding:'20px'}}>
      <p>Session Stored Value</p>
          <button onClick={()=>handleSetStorage('session', 'jesus', '6')}>Set LocalStorage key: 'jesus', value: '6'</button>
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

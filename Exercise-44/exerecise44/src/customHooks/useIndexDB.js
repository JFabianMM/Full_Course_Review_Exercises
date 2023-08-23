import { useState } from 'react';

export default function useIndexDB() {
    const [indexDBValue, setIndexDBValue] = useState('');

    let db;
    const StartDataBase = (DataBaseName, storeName, indexName) => {
        let db;
        let request = indexedDB.open(DataBaseName);
        request.onerror = function (event) {
            alert("We have an ERROR. " + event.code + " / " + event.message);
        }
        request.onsuccess = function (event) {
            db = event.target.result;
        };
        request.onupgradeneeded = function (event){
            let database = event.target.result;
            let store = database.createObjectStore(storeName, {keyPath: "id"});
            store.createIndex("Search"+indexName, indexName, {unique: false});
        }
    }

   const StoreNewData = (DataBaseName, storeName, indexName, value, key) => {
        let request = window.indexedDB.open(DataBaseName);
                request.onerror = function (event) {
                    alert("We have an ERROR. " + event.code + " / " + event.message);
        };
        request.onsuccess = function (event) { 
            db = request.result;      
            let obj={};
            obj[indexName] =value;
            obj.id = key; 
            let request2 = db.transaction([storeName], "readwrite")
                           .objectStore(storeName)
                           .add(obj);
                              request2.onsuccess = function () {
                                  alert("Data added successfully");
                              };
                              request2.onerror = function () {
                                  alert("Unable to add data aready exist in database! ");
                              }
        };
    }
    return {
        StartDataBase,
        StoreNewData
    }
}

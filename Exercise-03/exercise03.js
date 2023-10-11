class CancelableFetch {
    constructor (url){
        this.controller = new AbortController();
        this.promise=fetch(url, {   
                        signal:this.controller.signal,
                    })
    }
    cancel(){
        this.controller.abort();
    }
    then(callback){
        return this.promise.then(callback)
    }
    catch(callback){
        return this.promise.catch(callback)
    }
} 

const cancellableFetch = (url) => new CancelableFetch(url); 
module.exports = cancellableFetch;


require('isomorphic-fetch');

let cancellableFetch = async function (url) {
    controller = new AbortController();
    let res=  fetch(url, {   
        signal: controller.signal,                   
    }).then((result) => {
        return result.json();
    }).catch(error => {
        return error.name;
    });
    return res;
    };

module.exports = cancellableFetch

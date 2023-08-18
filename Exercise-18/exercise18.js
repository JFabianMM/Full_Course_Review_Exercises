function set(obj, path, value) {
    let newObj=obj;
    function traverse(path, value) {
        let partialObj = newObj;
        let pathArray = path.split('.');
        let len = pathArray.length;
        for(let i = 0; i < len-1; i++) {
            let pathElement = pathArray[i];
            if( !partialObj[pathElement] ) {
                partialObj[pathElement] = {};
            }else{
                if (typeof partialObj[pathElement] === 'object'){
                }else{
                    return obj;
                }
            }
            partialObj = partialObj[pathElement];
        }
        if (!partialObj[pathArray[len-1]]){
            partialObj[pathArray[len-1]] = value;
        }
    }
    traverse(path, value);
    return newObj;
}

module.exports = set
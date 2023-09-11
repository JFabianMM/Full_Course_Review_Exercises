 // This is the flatten function under an Imperative Style Aproach
 function flattenImperative(oldObj,parentName){     
    let result = {};
    for (const i in oldObj) {
        if ((typeof oldObj[i]) === 'object' && !Array.isArray(oldObj[i])) {
            const temp = flattenImperative(oldObj[i],i);
            for (const j in temp) {
                result[parentName+'_'+j] = temp[j];
            }
        }
        else {
            result[parentName+'_'+i] = oldObj[i];
        }
        if (oldObj[i]==null){
            result[parentName+'_'+i] = oldObj[i];
        }
    }
    return result;
};

// This is the flatten function under a Functional Style Aproach
// To convert the previous Imperative Style Aproach to a 
// Functional Approach, I passed each repetitive part of the 
// Imperative aproach to a function. 

// I added this function. (I seperated this part of code in a function).
function arrayIteration(result, temp, parentName){
    if (temp!=null){      
        Object.entries(temp).map(([j]) => {      
            result[parentName+'_'+j] = temp[j];
        })
    }
    return result
}
function flattenFunctional(oldObj,parentName){     /// Functional Approach
    let result = {};
    if (oldObj!=null){
        Object.entries(oldObj).map(([i]) => {
            if ((typeof oldObj[i]) === 'object' && !Array.isArray(oldObj[i])) { 
                const temp = flattenFunctional(oldObj[i],i);
                result = arrayIteration(result, temp, parentName);
            }else result[parentName+'_'+i] = oldObj[i];
            if (oldObj[i]==null){result[parentName+'_'+i] = oldObj[i];}
        });
    }
    return result;
};

module.exports = {
    flattenFunctional: flattenImperative,
    flattenImperative: flattenFunctional,
};
function longestRunOfTwoNumbers(input){
    let len=input.length;          
    let posFirst=0;                 
    let posSecond=0;               
    let posLastone=0;               
    let count=0;                   
    let maxCount=0                  
    let arr=[-1,-1];                
    let flag=0;                    
    let lastOne=0;                  
    let posArray=[];                
    for (let i=0; i<len; i++){      
        let val=input[i];         
        if (arr.includes(val)){     
            count++;                
            if (val==arr[1]){
                lastOne++;
                posSecond=i;
            }else{
                lastOne=1;
                posSecond=i;
            }
            if (count>maxCount){
                maxCount=count;
                posArray[0]=posFirst;                   
                posArray[1]=posSecond;
            }  
        }else{
            if (flag==2){
                arr[0]=arr[1];
                arr[1]=val;
                count=lastOne+1;
                lastOne=1;
                posFirst=posLastone;
                posLastone=i;
            }
            if (arr[0]==-1){                      
                arr[0]=val;
                flag=1;                            
                count++;                           
                maxCount=count;                 
                posArray[0]=0;                  
                posArray[1]=0;
                initialPos=i;                      
                posFirst=i;                      
                posSecond=i;                      
            }else{
                if (arr[1]==-1){
                    arr[1]=val;
                    flag=2;
                    count++;
                    lastOne=1;
                    posSecond=i;
                    posLastone=i;
                    finalPos=i;
                    if (count>maxCount){
                        maxCount=count;
                        posArray[0]=posFirst;
                        posArray[1]=posSecond;
                    }
                }   
            }
        }

    }
    let result = input.slice(posArray[0], posArray[1]+1)
    return result
}

module.exports = longestRunOfTwoNumbers
const matrixArea = function(matrix){
    let maxArea=0;
    let maxAreaPos=[0,0,0,0];
    let area, x, y, xx;
    let len=matrix.length;
    for (let j=0;j<len;j++){
        let arrLen=matrix[j].length;
        for (let i=0; i<arrLen; i++){
            if (matrix[j][i]==1){      
                x=0;
                y=0;
                val=1;
                xx=0;
                counter=0;
                while (val==1){
                    if (matrix[j+y][i+xx]==1){
                        if (xx==x){
                            xx=0;
                            area=(y+1)*(x+1);
                            if (area>maxArea){
                                maxArea=area;
                                maxAreaPos=[j,i,j+y,i+x];
                            } 
                            if (j+y<len-1){
                                y++;
                                xx=0;
                            }else{
                                if ((i+x)<(arrLen-1)){
                                    x++;
                                    y=0;
                                    xx=0;
                                }else{
                                    val=0;
                                }
                            }
                        }else{
                            xx++; 
                        }
                    }else{
                        if ((i+x)<(arrLen-1)){
                            x++;
                            y=0;
                            xx=0;
                        }else{
                            val=0;
                        }
                    }      
                }
            }
        }      
    }
    return maxArea;               
}                   

module.exports = matrixArea
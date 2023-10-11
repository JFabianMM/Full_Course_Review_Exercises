const photosList= function(data:any){
    let list:any=[];
    let len=data.images.length;
    function listformat(data:any){
        for (let i=0; i<len; i++){
            let item;
            if (data.images[i].width >= 2 * data.images[i].height){
                item={
                    img: data.images[i].src,
                    rows: 2,
                    cols: 4
                }
            }else{
                item={
                    img: data.images[i].src,
                    rows: 2,
                    cols: 2
                }
            }
            if (data.images[i].height >= 2 * data.images[i].width){
                item={
                    img: data.images[i].src,
                    rows: 4,
                    cols: 2
                }
            }
            list.push(item);
        }
        return list 
    } 
    let result=listformat(data);
    return  result;
}

module.exports = photosList; 
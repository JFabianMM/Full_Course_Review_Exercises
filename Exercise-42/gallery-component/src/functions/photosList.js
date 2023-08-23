const photosList= function(data){
    let list=[];
    let len=data.photos.length;
    function listformat(data){
        for (let i=0; i<len; i++){
            let item={
                img: data.photos[i].url,
                title: data.photos[i].title,
                rows: 2,
                cols: 2
            }
            list.push(item);
        }
        return list 
    } 
    let a= listformat(data);
    return  a
}

module.exports = photosList; 
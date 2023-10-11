const photosList = require('./photosList')

let data={
    id:'1', 
    page:0, 
    total:100, 
    images:[
        {src: "https://api.slingacademy.com/public/sample-photos/1.jpeg",width: 1200,height: 600},
        {src: "https://api.slingacademy.com/public/sample-photos/2.jpeg",width: 800,height: 600},
        {src: "https://api.slingacademy.com/public/sample-photos/3.jpeg",width: 600,height: 1200},
        {src: "https://api.slingacademy.com/public/sample-photos/4.jpeg",width: 800,height: 600},
        {src: "https://api.slingacademy.com/public/sample-photos/5.jpeg",width: 800,height: 600},
        {src: "https://api.slingacademy.com/public/sample-photos/6.jpeg",width: 1200,height: 600},
        {src: "https://api.slingacademy.com/public/sample-photos/7.jpeg",width: 1200,height: 600}
    ]}
let output=[
    {"img": "https://api.slingacademy.com/public/sample-photos/1.jpeg", "rows": 2, "cols": 4}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/2.jpeg", "rows": 2, "cols": 2}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/3.jpeg", "rows": 4, "cols": 2}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/4.jpeg", "rows": 2, "cols": 2}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/5.jpeg", "rows": 2, "cols": 2}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/6.jpeg", "rows": 2, "cols": 4}, 
    {"img": "https://api.slingacademy.com/public/sample-photos/7.jpeg", "rows": 2, "cols": 4}]

 test('Its expected to format and calculate the number of rows and columns of each photo:', () => {
    expect(photosList(data)).toMatchObject(output);
 });
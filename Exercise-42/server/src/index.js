import express from "express";
import cors from "cors";
import photos from "./images.cjs"; 

const app = express();
app.use(express.json());
app.use(cors());

app.listen(4000);
console.log('active in port 3000');

app.get ("/gallery/1", (req, res)=>{
    const count=parseInt(req.query.count);
    const page=parseInt(req.query.page);
    let sentImages=
        {
            id: '1',
            page: page,
            total: 100,
            images:[],
        }
    let pics= photos.images.slice(page*count, (page*count)+count);
    sentImages.images=pics;
    res.json(sentImages);

})

export default app;
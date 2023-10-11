import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image:any, size:any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const imagesList = useSelector((state: any) => state.imagesList);

  return (
    <ImageList id="galleryElement" style={{width:'66%', overflowY: 'scroll', top: '60px'}} sx={{ width: 800, height: 700 }} variant="quilted" cols={4} rowHeight={121}>
      {
        imagesList.map((item:any) => (     
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
        
      )) 
      }      
    </ImageList>
  );
}
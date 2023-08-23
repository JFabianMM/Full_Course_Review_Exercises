import * as React from 'react';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import RequestComponent from './RequestComponent';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const imagesList = useSelector(state => state.imagesList);
  const pages = useSelector(state => state.pages);
  
  let array=['1'];
  const elem = document.getElementById("galleryElement");
  return (
    <ImageList id="galleryElement" style={{width:'66%', overflowY: 'scroll', top: '60px'}} sx={{ width: 800, height: 700 }} variant="quilted" cols={4} rowHeight={121}>
      {
        imagesList.map((item) => (     
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
        
      )) 
      }      
    </ImageList>
  );
}
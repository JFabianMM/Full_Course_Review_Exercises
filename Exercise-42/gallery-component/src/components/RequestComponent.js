import * as React from 'react';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGetItemsQuery } from "../api/apiSlice";
import { updatePhotosNext } from '../features/photosNext/photosNextSlice';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';

import photosList from '../functions/photosList'; 



export default function RequestComponent() {
  const imagesList = useSelector(state => state.imagesList);
  const pages = useSelector(state => state.pages);
  const Dispatch = useDispatch();
  
  let flag=0;
  useEffect(() => {
     flag=1;
  }, [pages]);

  
  const{data, isError, isLoading, error} = useGetItemsQuery(pages);
  if (isLoading) return <div></div>;
  else if (isError) return <div></div>
  let images2=  photosList(data);
  if (flag==1){
    Dispatch(updatePhotosNext(images2));
  }
   
  

  

  return (
    <div>
    </div>
  );
}
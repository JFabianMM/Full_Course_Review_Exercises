import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { useGetItemsQuery } from "../api/apiSlice";
import {useDispatch} from 'react-redux';
import photosList from '../functions/photosList'; 
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

import { updateImagesList } from '../features/imagesList/imagesListSlice';
import { updatePages } from '../features/pagesList/pagesSlice';
import RequestComponent from './RequestComponent';

const List = styled('ul')({listStyle: 'none',padding: '10px',margin: '10px',display: 'flex',});

export default function UsePagination() {
  const Dispatch = useDispatch();
  const pages = useSelector(state => state.pages);
  const photosNext = useSelector(state => state.photosNext);
  const { items } = usePagination({count: 10});

  let newArray = items.filter(function (el) {
      return el.selected === true; 
  });

  let page;
  if (newArray[0].page === 1){
      page=0;
  }else{
      page=(newArray[0].page -1 )*10;
  }
  
  let {data, isError, isLoading, error}= useGetItemsQuery(page);
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>
  const images=  photosList(data);
 
    if (pages==page){
        if (photosNext!=null){
            Dispatch(updateImagesList(photosNext));
        }else{
            Dispatch(updateImagesList(images));
        }
    }else{
        Dispatch(updateImagesList(images));
    }
    Dispatch(updatePages(page+10));
  

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
            } else if (type === 'page') {
                children = (
                  <button type="button" style={{fontWeight: selected ? 'bold' : undefined,}}{...item}>
                    {page}
                  </button>
                );
            }else {
              children = (
                  <button type="button" {...item} style={{marginLeft:'10px'}}>
                    {type}
                  </button>
              );
            }
            return <li key={index}>{children}</li>;
        })}
      </List>
      <RequestComponent></RequestComponent>
    </nav>
  );
}



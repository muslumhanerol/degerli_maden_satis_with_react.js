import React, {useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function Loading() {
    //productSlice den pending de true false miz zaten var onları buradna çekeceğiz.
    const {loading} = useSelector((store)=>store.product);     
 
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading} //default degeri loading ile başlattık çünkü productSlice de deger zaten false.
    >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default Loading
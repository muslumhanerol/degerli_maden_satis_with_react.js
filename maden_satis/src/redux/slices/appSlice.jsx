//Tüm uygulamada kullanılacak özellikleri burada tanımlayabiliriz.
import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    loading : false
}

export const productSlice = createSlice({ 
    name:"app",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {

    }
})
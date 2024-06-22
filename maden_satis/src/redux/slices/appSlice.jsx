//Tüm uygulamada kullanılacak özellikleri burada tanımlayabiliriz.
import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    loading : false
}

export const productSlice = createSlice({ //slice oluşturuldu.
    name:"app",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {

    }
})

export const {  } = productSlice.actions //Dışarıya açtık.

export default productSlice.reducer
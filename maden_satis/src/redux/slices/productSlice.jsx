//Redux: 3. adım. import yapılır.
import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    product:[], //tüm ürünler
    selectedProduct:{} //ürün detay
}

export const productSlice = createSlice({ //slice oluşturuldu.
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {

    }
})

export const {  } = productSlice.actions //Dışarıya açtık.

export default productSlice.reducer
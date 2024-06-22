//Redux: 3. adım. import yapılır.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios';

const initialState = {
    product:[], //tüm ürünler
    selectedProduct:{}, //ürün detay
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"
export const getAllProducts = createAsyncThunk("getAllProducts", async()=>{
  const response = await  axios.get(`${BASE_URL}/products`); //Adresten bütün ürünler çekildi.
  return response.data; //ve ürünleri dön.
})

export const productSlice = createSlice({ //slice oluşturuldu.
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {
        //istek atılıp bekleme modunda ise state.loading yi truw yap.
        builder.addCase(getAllProducts.pending , (state)=>{ 
            state.loading = true;
        })
        //ürünler başarılı bir şekild alınırsa state içindeki loading yi false olarak setle. Ürün alındı bitti. state.product ıda gelen geğerle setle.
        builder.addCase(getAllProducts.fulfilled , (state,action)=>{ 
            state.loading = false;
            state.products = action.payload;
        })
    }
})

export const {  } = productSlice.actions //Dışarıya açtık.

export default productSlice.reducer
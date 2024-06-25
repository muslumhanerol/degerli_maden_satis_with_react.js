import { createSlice } from '@reduxjs/toolkit' 

const getBasketFromStorage = () =>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products : getBasketFromStorage(),

}

const writeFromBasketToStorage = () =>{
    localStorage.setItem("basket", JSON.stringify())
}



export const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers:{
        addToBasket : (state, action)=>{

        }
    }
})


export const {  } = basketSlice.actions 
export default basketSlice.reducer
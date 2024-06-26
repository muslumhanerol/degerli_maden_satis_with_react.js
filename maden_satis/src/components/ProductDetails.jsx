import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/Product.css';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';



function ProductDetails() {
    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store)=> store.product)

    const {price , image, title , description} = selectedProduct;

    const[count, setCount]=useState(0)


    const dispatch = useDispatch();

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product)=>{
            if(product.id == id){
                dispatch(setSelectedProduct(product));
            }
        })
    }
  return (
    <div className='detail_product' >
        <div >
        <img src={image} width={300} height={500}/>
        </div>
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h1 className='price'>{price} ₺</h1>
            
            <div id='icons'>
                <FaMinus onClick={decrement} style={{marginRight:'25px'}}/> <span>{count}</span> <FaPlus onClick={increment} style={{marginLeft:'25px'}}/>                
            </div>

            <div className='basket'>
                <button onClick={addBasket}>Sepete Ekle</button>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails
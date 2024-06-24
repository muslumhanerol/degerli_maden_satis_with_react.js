import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/Product.css';


function ProductDetails() {
    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store)=> store.product)

    const {price , image, title , description} = selectedProduct;


    const dispatch = useDispatch();

    useEffect(()=>{
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product)=>{
            if(product.id ==id){
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
            <h1>{price}</h1>
        </div>
    </div>
  )
}

export default ProductDetails
import React from 'react'
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();

  return (
    <div className='card'>
      <img className='image' src={image} alt="" />
      <div className='texttit'>
        <p>{title}</p>
        <h3>{price} ₺</h3>
      </div>
      <div className='flex-row'>
        <button onClick={() => navigate("/product-details/" + id)} className='btndetay'>Detaylar</button>
      </div>
    </div>
  )
}

export default Product
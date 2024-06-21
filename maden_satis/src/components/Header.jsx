import React from 'react'
import '../css/Header.css';
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";


function Header() {
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row'>
            <img className="logo" src="./src/images/logo.png"/>
            <p className="logo-text">DEGERLİ MADEN SATIŞ</p>
        </div>
        
        <div className='flex-row'>
            <input className='search-input' type='text' placeholder='Ürünleri Ara'/>
            <div className='icon'>
            <CiLight />
            {/* <FaRegMoon /> */}
            <SlBasket />
            </div>  
        </div>
    </div>
  )
}

export default Header
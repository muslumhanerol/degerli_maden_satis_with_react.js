import React, { useState } from 'react'
import '../css/Header.css';
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";


function Header() {
    const [mode , setmode] = useState(false);
    const changeMode = () => {
        const root = document.getElementById("root");
        setmode(!mode);
        if(mode){
            root.style.backgroundColor="black";
            root.style.color="#fff";
        } else{
            root.style.backgroundColor="#fff";
            root.style.color="black";
        }
        setmode(!mode);

    }

  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row'>
            <img className="logo" src="./src/images/logo_bb.png"/>
            <p className="logo-text">DEGERLİ MADEN SATIŞ</p>
        </div>
        
        <div className='flex-row'>
            <input className='search-input' type='text' placeholder='Ürünleri Ara'/>
            <div className='icon'>
            {mode ? <FaRegMoon onClick={changeMode} /> : <CiLight onClick={changeMode} />}
            <SlBasket />
            </div>  
        </div>
    </div>
  )
}

export default Header
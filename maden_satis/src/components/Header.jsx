import React, { useState } from 'react'
import '../css/Header.css';
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';



function Header() {
    const [mode , setmode] = useState(false);
    const navigate = useNavigate();
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
        <div className='flex-row' onClick={()=>navigate("/")}>
            <img className="logo" src="./src/images/logo_bb.png"/>
            <p className="logo-text">DEGERLİ MADEN SATIŞ</p>
        </div>
        
        <div className='flex-row'>
            <input className='search-input' type='text' placeholder='Ürünleri Ara'/>
            <div className='icon'>
            {mode ? <FaRegMoon onClick={changeMode} /> : <CiLight onClick={changeMode} />}
            
            <Badge badgeContent={4} color="primary">
                <SlBasket />
            </Badge>
            
            </div>  
        </div>
    </div>
  )
}

export default Header
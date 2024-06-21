import React from 'react'
import '../css/Header.css';

function Header() {
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row'>
            <img className="logo" src="./src/images/logo.png"/>
            <p className="logo-text">DEGERLİ MADEN SATIŞ</p>
        </div>
        <div>
            <input className='search-input' type='text' placeholder='Ürünleri Ara'/>
        </div>
    </div>
  )
}

export default Header
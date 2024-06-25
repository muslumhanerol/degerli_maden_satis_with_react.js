import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { Drawer } from '@mui/material';
import { useSelector } from 'react-redux'
import { store } from './redux/store'



function App() {

  const {products} = useSelector((store)=> store.basket);

  return (
    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>
        <Drawer sx={{padding:'20px'}} anchor='right' open={false}>
          {
            products && products.map((product)=>{
              return(

                <div className='flex-row' style={{padding:'20px'}}>
                  <img style={{marginRight:'5px'}} src={product.image} width={50} height={50}/>
                  <p style={{width:'320px', marginRight:'5px'}}>{product.title}({product.count})</p>
                  <p style={{fontWeight:'bold', marginRight:'10px', width:'60px'}}>{product.price}TL</p>
                  <button style={{padding:'5px', borderRadius:'5px', backgroundColor:'blueviolet', border:'none', color:'#fff', width:'50px'}}>Sil</button>
                </div>
              )
              36. dk kaldık
                
              
              
            })
          }
        </Drawer>         
      </PageContainer>
    </div>
  )
}

export default App

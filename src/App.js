import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Product from "./component/products/Product";
import ProductDetails from "./component/products/ProductDetails";
import { useState ,useEffect } from "react";
import Carts from "./component/products/Carts";
import Favourite from "./component/products/Favourite";
import About from "./component/about/About";
import Contact from "./component/contact/Contatc";

const localData = localStorage.getItem("Data") ?
JSON.parse(localStorage.getItem("Data")) : []

const localFav = localStorage.getItem("FAV") ?
JSON.parse(localStorage.getItem("FAV")) : []

function App() {

  const [cart,setCart] = useState(localData)
  const [fav,setFav] = useState(localFav)


  useEffect(()=>{
    localStorage.setItem("Data",JSON.stringify(cart))
  },[cart])

  useEffect(()=>{
    localStorage.setItem("FAV",JSON.stringify(fav))
  },[fav])

////////////////////////////////////  ADD TO CART ////////////////////////////////////////

  const addToCart = (product)=>{
    const Find = cart.find(item=>item.id === product.id)

    if(Find){
      setCart(cart.map(item=>item.id === product.id ? { ...Find , Num : Find.Num + 1  }:item  ))
    }else{
      setCart([...cart , { ...product , Num : 1}])
    }
  }

////////////////////////////////////  DELETE ITEM ////////////////////////////////////////


  const deleteItem =(id)=>{

    const Delete = cart.filter(item => item.id !== id)
    setCart(Delete)

  }

////////////////////////////////////  ADD TO FAVOURITE ////////////////////////////////////

const addToFav = (ProductFav) =>{

  const FindFav = fav.find(item => item.id === ProductFav.id )

  if(FindFav){
    setFav(fav.map(item=> item.id === ProductFav.id ? FindFav : item ))
  }else{
    setFav([...fav , {...ProductFav} ])
  }
}

////////////////////////////////////  DELETE FAVOURITE ////////////////////////////////////

const deleteFav = (id) =>{
    const Delete = fav.filter( item=>item.id !== id )
    setFav(Delete)
}


  return (
    <div >
      <Navbar cart={cart} fav={fav} />
      <Routes>
        <Route path="/"  element={<Product addToCart={addToCart} addToFav={addToFav} />} /> 
        <Route path='product/:productId' element={<ProductDetails />}/>
        <Route path='/cart' element={<Carts cart={cart} deleteItem={deleteItem} />}/> 
        <Route path='/favourite' element={<Favourite fav={fav} deleteFav={deleteFav} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/> 
      </Routes>
    </div>
  );
}

export default App;

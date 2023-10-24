import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


const Product = ({addToCart,addToFav}) => {

    const [ data , setData ] = useState([])
    const [ categories , setCategories ] = useState([])

//////////////////////////////////////  GET PRODUCT //////////////////////////////////////////////

    const getProducts = () =>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(res => res.json())
        .then(data => setData(data.products))
    }
   
////////////////////////////////////  GET ALL CATEGORIES /////////////////////////////////////////

    const getAllCaegories = () =>{
      fetch("https://dummyjson.com/products/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }

////////////////////////////////////  GET SINGLE CATEGORIES //////////////////////////////////////

    const getCategorie = (catName) =>{
      fetch(`https://dummyjson.com/products/category/${catName}`)
      .then(res => res.json())
      .then(data => setData(data.products))
    }

    useEffect(()=>{
      getAllCaegories()
      getProducts()
    },[])


  return (
    

    <div className='Container-Product '>
      
{/* ////////////////////////////////////  GET ALL CATEGORIES //////////////////////////////////// */}

      <div className='Container-Categorie '>
        <button onClick={()=>getProducts()} className='w-auto  bg-zinc-400 text-zinc-900 m-1 p-1 rounded-lg font-bold '>All</button>
        {
          categories.map(categorie=>{
            return(
              <button onClick={()=>getCategorie(categorie)} >{categorie}</button>
            )
          })
        }
      </div>

{/* ////////////////////////////////////  GET ALL PRODUCTS //////////////////////////////////// */}

    <div className='Content-Product '>
            {data.map((val, index) => {
              return (

                <div className='Card ' key={index}>
                  <div className='Container-Img '>    
                      <img  src={val.thumbnail}/>
                  </div>
                  <div className='Info'>
                      <h3 className='Title'>{val.title}</h3>
                      <p className='Price'>{val.price}<span className='text-orange-600'>$</span></p>
                  </div>
                  <div className='Info'>
                      <h3 className='Brand'>{val.brand}</h3>
                <Link to={`product/${val.id}`}>
                    <button className='Details'>Details</button>
                </Link> 
                  </div>
                  <div className='Info'>
                      <button onClick={()=>addToCart(val)} className='Add-Cart'>Add To Cart</button>
                      <i onClick={()=>addToFav(val)} className="fa-solid fa-heart"></i>
                  </div>
                </div>
              )
            })}
        </div>
       
    </div>
  )
}

export default Product
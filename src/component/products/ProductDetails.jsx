import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {
    const params = useParams()
    const api_url = 'https://dummyjson.com/products'
    const [Products , setProducts] = useState([])

    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


  return (
    <div className='Container-Details'>
       <div className='Content-Details '>
       <div className='Container-Details-Img '>
                 <img src={Products.thumbnail}/>
        </div>
        <div className='Container-Details-Info'>
                <h5 className='Description' >{Products.description}</h5>
                <p  className='Title'  > {Products.title}</p>
                <h5 className='Price'>{Products.price}<span className='text-3xl text-orange-600 font-bold' >$</span></h5>
                <h5 className='Brand' >{Products.brand}</h5>
        </div>
       </div>
    </div>
  )
}

export default ProductDetails
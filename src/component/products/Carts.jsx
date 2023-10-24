import React, { useEffect, useState } from 'react'
import './Carts.css'

const Carts = ({cart,deleteItem}) => {

    const [carts,setCarts] = useState([])   
  
    useEffect(()=>{
        setCarts(cart)   
    },[cart])

   
      
    return (
        <>
        {
            cart.length >= 1 ?
    <div className='Container-Cart '>
        <div className='Content-Cart  '>
        {
            carts.map((item,index)=>{
                return(
                    <div className='Cart-Card ' key={index}>
                        <div className='Cart-Card-Img'>
                            <img  src={item.thumbnail}/>
                        </div>
                        <div className='Cart-Card-Info '>
                                <h3 className='Cart-Card-Title'>{item.title}</h3>
                            <div className='Cart-Card-Info-Des '>
                            <button 
                            onClick={ ()=>{
                            const Minus = carts.map((ite,indx)=>{
                                    return index === indx ? { ...ite , Num: ite.Num > 1 ? ite.Num - 1 : 1  } : ite
                                })
                                setCarts(Minus)
                            } }
                            >-</button>
                             <h1>{item.Num}</h1>
                            <button 
                            onClick={ ()=>{
                            const plus = carts.map((ite,indx)=>{
                                    return index === indx ? { ...ite , Num: ite.Num + 1  } : ite
                                })
                                setCarts(plus)
                            } }
                            >+</button>
                            </div>
                            <h3 className='Item-Price'>{item.price * item.Num }<span >$</span></h3>
                        </div>
                        <i onClick={()=>deleteItem(item.id)}  className="fa-solid fa-circle-xmark fa-2x"></i>
                    </div>
                )
            })
        }
    </div>
        <h2 className='Total-Card'>total:
            <span>
            {
                carts.map(item=> item.price * item.Num ).reduce(( total , value )=> total+ value,0)
            }$
            </span>
        </h2>
    </div>
    : ''
        }
        </>
  )
}

export default Carts
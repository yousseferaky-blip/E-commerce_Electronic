import React, { useEffect, useState } from 'react'
import './Favourite.css'

const Favourite = ({fav,deleteFav}) => {

    const [favo , setFavo] = useState([])
    useEffect(()=>{
        setFavo(fav)
    },[fav])

  return (
    <>
    {
        fav.length >=1 ?
    
    <div className='Container-Fav'>
    {
        favo.map((item,index)=>{
            return(
                <div className='Content-Fav ' key={index}>
                    <div className='Content-Fav-Img '>
                        <img src={item.thumbnail}/>
                    </div>
                    <div className='Content-Fav-Info'>
                        <h3>{item.title}</h3>
                        <p className='Content-Fav-Info-description'>{item.description}</p>    
                    </div>
                    <i onClick={()=>deleteFav(item.id)}  className=" fa-solid fa-circle-xmark fa-2x Delete-Fav"></i>
                </div>
            )
        })
    }
    <h3 className='Favourite'>Favourite
        <i className="fa-solid fa-heart "></i>
        <i className="fa-solid fa-heart "></i>
    </h3>
</div>
  : ''  
  } 
</>
  )
}

export default Favourite
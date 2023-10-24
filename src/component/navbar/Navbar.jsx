import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = ({cart,fav}) => {

    const [Mobil,setMobil] = useState(false)

    return (
      <nav>
            <ul className={Mobil ? 'Nav-Mobil' : 'Nav-Link'}>
              <li >
                <Link className='link' to={'/'}>
                  <i class="fa-solid fa-house  Icon-Nav"></i>
                  <span className=" Info-Nav ">Home</span>
                </Link>
              </li>
              <li >
                <Link className='link' to={'/about'}>
                <i class="fa-solid fa-address-card Icon-Nav"></i>
                  <span className=" Info-Nav ">About</span>
                </Link>
              </li>
              <li >
                <Link className='link' to={'/contact'}>
                  <i id="icon" class="fa-solid fa-phone Icon-Nav"></i>
                  <span  className=" Info-Nav ">Contact</span>
                </Link>
              </li>
              <li >
                <Link className='link' to={'/cart'}>
                 <i className="fa-solid fa-bag-shopping "></i>
                  <span className="Shopping-Nav">
                    { cart.length === 0 ? '' : cart.length  }
                  </span>
                </Link>
              </li>
              <li >
                <Link className='link' to={'/favourite'}>
                <i class="fa-solid fa-heart "></i>
                  <span className="Heart-Nav">
                    { fav.length === 0 ? '' : fav.length }
                  </span>
                </Link>
              </li>

            </ul>  
            <a onClick={()=>setMobil(!Mobil)} className='BARS'>
              {
                Mobil ? <i class="fa-solid fa-x fa-2x"></i> : <i class="fa-solid fa-bars fa-2x"></i> 
              }
              </a>

      </nav>
    )
  }
  
  export default Navbar
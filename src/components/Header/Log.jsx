import React, {useState } from 'react'
import {LuSprout} from 'react-icons/lu'
import {BsBasket2} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import Aside from '../aside/Aside';
import Order from './Order'
export default function Log(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const Click = event => {
    setCartOpen(current => !current);
  }
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
    return (
      <div className='logo'>
      <div> <AiOutlineMenu size={22} className='icon' onClick={handleClick}/></div> 
      {!isShown && <div><LuSprout size={22} className='luSprout'/>organic beauty</div>}  
      {!isShown && <div><AiOutlineSearch size={22} className='icon'/></div>}
      {isShown && <div className="Aside"> <Aside/></div>}
      {!isShown && <div className="cors"><BsBasket2 size={22} className='icon' onClick={Click}/></div>}
      {cartOpen && 
        <div className="shop-add">
          {props.orders.map(el => (
            <Order key={el.id} item={el} onDelete={props.onDelete}/>
          ))}
        </div>
      }
      </div>
    )
  }



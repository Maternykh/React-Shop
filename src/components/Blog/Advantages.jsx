import React, {useState } from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {GiSprout} from 'react-icons/gi'
const Advantages = () => {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const show1 = event => {
    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
  };
  const show2 = event => {
    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
  };
  const show3 = event => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
  };
  return (
    <div className='Advantages'>
        <div className="adv">Наши преимущества</div>
        <div className="dostavk">
         {isShown1 && <TbTruckDelivery size={40} className='grus'/>} 
         {isShown2 && <MdOutlineHealthAndSafety size={40} className='grus'/>}
         {isShown3 && <GiSprout size={40} className='grus'/>}
        </div>
        <div className='Belorus'>
        {isShown1 && "Доставка по всей Белоруси"}
        {isShown2 && "Безвредно для здоровья"}
        {isShown3 && "Только натуральные компоненты"}
        </div>
        <div className="textik">
          При заказе от 500 руб бесплатная доставка
        </div>
        <div className="circleselect"><div className="circle" onClick={show1}>1</div><div className="circle" onClick={show2}>2</div><div className="circle" onClick={show3}>3</div></div>
    </div>
  )
}

export default Advantages
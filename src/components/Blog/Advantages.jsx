import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
const Advantages = () => {
  return (
    <div className='Advantages'>
        <div className="adv">Наши преимущества</div>
        <div className="dostavk"><TbTruckDelivery size={40} className='grus'/></div>
        <div className='Belorus'>Доставка по всей Белоруси</div>
        <div className="textik">При заказе от 500 руб бесплатная доставка</div>
    </div>
  )
}

export default Advantages
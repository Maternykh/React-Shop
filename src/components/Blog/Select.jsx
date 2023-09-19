import React from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
const Select = () => {
  return (
    <div className='Select'>
        <div className="blogo">Блог</div>
        <div className="selector"><MdArrowBackIosNew className='arrow' size={100}/><div className="imachka"><img src="./3.jpg" className='photoch'/></div><MdArrowForwardIos className='arrow' size={100}/></div>
        <div className="organcosmet">Органическая косметика и ее польза</div>
    </div>
  )
}

export default Select
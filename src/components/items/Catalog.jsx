import React from 'react'
import {BsBasket2} from 'react-icons/bs'
const Catalog = () => {
  const items = [
    {
      id:1,
      title:"Крем для лица",
      price:143,
      image:"./1.jpg"
    },
    {
      id:2,
      title:"Маска для лица",
      price:180,
      image:"./2.jpeg"
    },
    {
        id:3,
        title:"Маска для жопы",
        price:180,
        image:"./2.jpeg"  
    },
    {
      id:4,
      title:"Маска для тебя",
      price:500,
      image:"./1.jpg"  
    },
  ]
  return (
    <div className='items'>
        {items.map(todo => (
            <div key={todo.id}>
                <div><img src={todo.image} className='image'/></div>
                <div className='title'>{todo.title}</div>
                <div className='title'>{todo.price} руб</div>
                <div className="contin"><div className="full" >подробнее</div>
                <div className="corsina"><BsBasket2/></div></div>
            </div>
        ))}
    </div>
  )
}
export default Catalog
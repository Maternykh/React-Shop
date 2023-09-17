import React, { Component } from 'react'
import {BsBasket2} from 'react-icons/bs'
export class Item extends Component {
  render() {
    return (
      <div> 
      <div><img src={this.props.item.image} className='image'/></div>
      <div className='title'>{this.props.item.title}</div>
      <div className='title'>{this.props.item.price} руб</div>
      <div className="contin"><div className="full" >подробнее</div>
      <div className="corsina" onClick={() => this.props.onAdd(this.props.item)}><BsBasket2/></div></div>
      </div>
    )
  }
}

export default Item
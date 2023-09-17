import React, { Component } from 'react'
import {FiDelete} from 'react-icons/fi'
export class Order extends Component {
  render() {
    return (
      <div className='cart-item'>
      <div className='cart-img-cont'><img src={this.props.item.image} className='cart-image'/></div>
      <div className="cart-cont">
      <div className='cart-title'>{this.props.item.title}</div>
      <div className='cart-title'>{this.props.item.price} руб</div>
      <div className="cart-del"><FiDelete size={22} className='FiDelete' onClick={() => this.props.onDelete(this.props.item.id)}/></div>
      </div>
      </div>
    )
  }
}

export default Order
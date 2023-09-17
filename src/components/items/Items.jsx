import React, { Component } from 'react'
import Item from './Item'
export class Items extends Component {
  render() {
    return (
    <div className='items' id='items'>
    {this.props.items.map(todo => (
       <Item onShowItem={this.props.onShowItem} key={todo.id} item={todo} onAdd={this.props.onAdd}/>
      ))}
    </div>
    )
  }
}

export default Items
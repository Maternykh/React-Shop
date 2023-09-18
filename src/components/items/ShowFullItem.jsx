import React, { Component } from 'react'
export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className="full-con">
          <img className='full-image' src={this.props.item.image} />
          <div className="full-cont-title">
            <div className='full-title'>{this.props.item.title}</div>
            <div className='full-title'>{this.props.item.price} руб</div>
          </div>          
        </div>
        <div className="full-desc">{this.props.item.desc}</div>  
        <div className="full-contin"><div className="full" onClick={() => this.props.onShowItem(this.props.item)}>назад</div></div>
      </div>
    )
  }
}

export default ShowFullItem
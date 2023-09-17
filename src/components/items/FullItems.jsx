import React, {useState } from 'react'
import Catalog from './Catalog';
const FullItems = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div>   
      <button className='btn' onClick={handleClick}>смотреть</button>
      {isShown && <Catalog/>}
    </div>
  )
}

export default FullItems
import React, {useState } from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'

const Select = () => {
  const [isSelect1, setisSelect1] = useState(true);
  const [isSelect2, setisSelect2] = useState(false);
  const [isSelect3, setisSelect3] = useState(false);
  const select1 = event => {
    setisSelect1(true);
    setisSelect2(false);
    setisSelect3(false);
  };
  const select2 = event => {
    setisSelect1(false);
    setisSelect2(true);
    setisSelect3(false);
  };
  const select3 = event => {
    setisSelect1(false);
    setisSelect2(false);
    setisSelect3(true);
  };
  return (
    <div className='Select'>
        <div className="blogo">Блог</div>
       {isSelect1 && <div>
        <div className="selector">
          <MdArrowBackIosNew className='arrow' size={100} onClick={select2}/>
            <div className="imachka">
            <img src="./3.jpg" className='photoch'/>
            </div>
          <MdArrowForwardIos className='arrow' size={100} onClick={select3}/>
        </div>
        <div className="organcosmet">Органическая косметика и ее польза</div>
        </div>
        }
         {isSelect2 && <div>
        <div className="selector">
            <div className="imachka">
            <img src="./7.jpg" className='photoch'/>
            </div>
          <MdArrowForwardIos className='arrow' size={100} onClick={select1}/>
        </div>
        <div className="organcosmet">Увлажняет поверхность кожи не травмируя ее</div>
        </div>
        }
         {isSelect3 && <div>
        <div className="selector">
          <MdArrowBackIosNew className='arrow' size={100} onClick={select1}/>
            <div className="imachka">
            <img src="./8.jpg" className='photoch'/>
            </div>
        </div>
        <div className="organcosmet">Увлажняет поверхность кожи не травмируя ее</div>
        </div>
        }
    </div>
  )
}

export default Select
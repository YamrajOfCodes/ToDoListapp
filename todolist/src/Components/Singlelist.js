import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Syle.css'
import { deletelist } from '../Slices/noteslice';

function Singlelist() {

    const data=useSelector(store=> store.notesReducer.list)
    const dispatch=useDispatch();
    

  return (
    <div className='singlelist-container'>
       {
      
        data.map(element=>{
            return(
              <div className='singlelist'>
              <p>{element.data} <br /> {element.data2}</p>
              <button onClick={()=>{
                dispatch(deletelist(element.id))
              }}>X</button>
              </div>
              
              ) 
              
        })
       }
    </div>
  )
}

export default Singlelist
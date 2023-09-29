import React from 'react'
import './Syle.css'
import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import { addlist } from '../Slices/noteslice';
import { nanoid } from '@reduxjs/toolkit';

function Lists() {

const dispatch=useDispatch();
const titleref=useRef(null);
const descref=useRef(null);


function addData(e)
{
    e.preventDefault();
    const data1=titleref.current.value;
    const data2=descref.current.value;
    dispatch(addlist({
        data:data1,
        data2:data2,
        id:nanoid(10)
    }));
    console.log(data1,data2);

}

  return (
    <form className='AddNote'>
       <div className="flex">
       <input type="text" placeholder='Add Title' ref={titleref} />
        <input type="text" placeholder='Add Desc' ref={descref} />
       </div>
        <button onClick={addData}>Add Note</button>
    </form>
  )
}

export default Lists
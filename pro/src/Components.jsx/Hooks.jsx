import React, { useState } from 'react'

export default function Hooks() {
    const [color,setcolor] =useState(0);

    const changecontent =() =>{
        const x=color+1;
        setcolor(x);
    }
    const changecontent2 =() =>{
        const x=color-1;
        setcolor(x);
    }

    // const changecontent =() =>{
    //     const x="This is a hooks"
    //     setcolor(x);
    // } 

    // const changecontent2 =() =>{
    //     const y='This is a hooks world';
    //     setcolor(y);
    // }


  return (
    <>
    <h1>{color}</h1>
      <button onClick={changecontent}>+</button>
      <br />

      <button onClick={changecontent2}>-</button>
    </>
  )
}

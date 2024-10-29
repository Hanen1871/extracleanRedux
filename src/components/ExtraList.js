import React from 'react'
import { useSelector } from 'react-redux'
import ExtraCard from './ExtraCard';

function ExtraList({text, rate}) 
{
    const extras =useSelector((state)=> state.extra.Extralist);
    console.log(extras)
    return (
    <div>
      
      <div className='containerr'>
      
    {/* {extras?.filter((el)=>el.description.toLowerCase().includes(text.toLowerCase()) &&
     (el.rating>=rate)).map((el)=><ExtraCard extra={el} />).reverse()} */}
     {extras.map((el)=><ExtraCard  extra={el}/>)}

    </div></div>
  )
}

export default ExtraList
import React from 'react'


import ReactStars from "react-rating-stars-component";
import EditExtra from './EditExtra';



function ExtraCard({extra}) {
  return ( 
    

  <div className='cardd1'>
    <div className='cardd'>
<img src={extra.image } style={{minWidthwidth:"250px", maxWidth:"250", minHeight:"350", maxHeight:"350"}} />
</div>
<div style={{ display:'grid',justifyContent:"center", marginTop:"6px", textAlign:"center", fontWeight:"bolder" }} >

<p style={{fontFamily:"cursive" , fontSize:"16px"  }} >{extra.description}</p>

<ReactStars
                    edit={true}
                    count={5}
                    value={extra.rating}
                    size={22}
                    activeColor="#ffd700" 
                  /> 

<p style={{fontFamily:"cursive" , fontSize:"16px", fontWeight:"bolder"}} >{extra.prix}</p> 
</div>

{/* <EditExtra extra={extra}/> */}

</div>
  )
}

export default ExtraCard
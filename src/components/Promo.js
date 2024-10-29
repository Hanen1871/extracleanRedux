import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Promo() {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>



<Link to="/Extrapromo">
<img src="https://www.kravmaga-gembloux.be/img_s/92726/blog/offre-speciale.jpg"  
style={{width:"550px", height:"550px", margin:"8px",padding:"5px 0px 5px 5px", borderRadius:"30px"}} /></Link>



</div>
  )
}

export default Promo
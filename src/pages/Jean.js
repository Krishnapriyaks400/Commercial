import React from 'react'
import { Link } from 'react-router-dom'

function jean() {
  return (
    <>
   <div class=" womenheading"> Womens Jeans</div>
      < div class="gallery">
  <Link target="_blank" to="/jeanone">
    <img src="jean1.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/jeanone" target="_blank">Dark blue jean</Link> </div>
  <div class="discount">60% off<del>1,516</del> 699/-</div> 
   </div>

< div class="gallery">
  <Link target="_blank" to="/jeantwo">
    <img src="jean2.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/jeantwo" target="_blank"> Blue jean</Link></div> 
  <div class="discount">30% off<del>3,016</del> 2660/-</div>  
</div>
< div class="gallery">
  <Link target="_blank" to="/jeanthree">
    <img src="jean3.jpeg" alt="top1"></img>
  </Link>
  <div class="descriri"> <Link to="/jeanthree" target="_blank">Ice blue jean</Link></div>
  <div class="discount">20% off<del>4,016</del> 3,160/-</div> 
</div>

   



    </>
  )
}

export default jean

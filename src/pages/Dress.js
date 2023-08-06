import React from 'react'
import { Link } from 'react-router-dom'

function Dress() {
  return (
    <>
    <div class=" womenheading"> Womens Dresses</div>
      < div class="gallery">
  <Link target="_blank" to="/dressone">
    <img src="dress1.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/dressone" target="_blank"> Full black dress</Link> </div>
  <div class="discount">40% off<del>2,016</del>1,260/-</div>   </div>

< div class="gallery">
  <Link target="_blank" to="/dresstwo">
    <img src="dress2.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/dresstwo" target="_blank">style dress</Link></div> 
  <div class="discount">69% off<del>5,496</del> 1699/-</div> 
</div>
< div class="gallery">
  <Link target="_blank" to="/dressthree">
    <img src="dress3.jpeg" alt="top1"></img>
  </Link>
  <div class="descriri"> <Link to="/dressthree" target="_blank">Style  Black & white dress</Link></div>
  <div class="discount">30% off<del>1,399</del> 979/-</div> 
</div>

     </>
  )
}

export default Dress

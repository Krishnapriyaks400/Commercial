import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
  return (
    <>
    <div class=" womenheading"> Womens Tops</div>
      < div class="gallery">
  <Link target="_blank" to="/topone">
    <img src="top1.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/topone" target="_blank"> white style Top</Link> </div>
  <div class="discount">60% off<del>1,016</del> 660/-</div> 
  </div>

< div class="gallery">
  <Link target="_blank" to="/toptwo">
    <img src="top2.jpeg" alt="top1"></img>
  </Link>
  
  <div class="descriri"> <Link to="/toptwo" target="_blank"> Blue Top</Link></div> 
  <div class="discount">60% off<del>1,016</del> 599/-</div> 
</div>
< div class="gallery">
  <Link target="_blank" to="/topthree">
    <img src="top3.jpeg" alt="top1"></img>
  </Link>
  <div class="descriri"> <Link to="/topthree" target="_blank"> Pure white Top</Link></div>
  <div class="discount">60% off<del>1,016</del> 700/-</div> 
</div>

    </>
  )
}

export default Top

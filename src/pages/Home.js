import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
     <>
    < div class="gallery">
  <Link  to="/top">
    <img src="top1.jpeg" alt="top1"></img>
</Link>
  <div class="desc"> <Link to="/top" target="_blank"> Womens tops <br/>start from 599/- </Link></div>
</div>


<div class="gallery">
  <Link  to="/Jean">
    <img src="jean1.jpeg" alt="jean1" ></img>
  </Link>
  <div class="desc"><Link to="/jean" target="_blank"> Womens jeans <br/>start from 699/-  </Link></div>
</div>

<div class="gallery">
  <Link  to="/Dress">
    <img src="dress3.jpeg" alt="jean1" ></img>
  </Link>
  <div class="desc"><Link to="/Dress" target="_blank"> Womens Dresses<br/> start from 799/-  </Link></div>
</div>
</>
)
}

   
export default Home

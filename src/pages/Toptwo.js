import React from 'react'

function Toptwo() {
  return (
    <div class="container mt-3">
    <h4>Blue Top</h4>
    <p class="casual">Casual Shoulder  Sleeveless Blue Top</p> 
    <div class="discount">60% off<del>1,300</del> 599/-</div>  
    <div class="row">        
    <div class="col"> <img src="top2.jpeg" class="img-thumbnail" alt="dressesone"></img>
    
    </div>
    <div class="col-lg-3">
    <h5>Products Details</h5>
    <table class="table table-borderless">
    
    <tbody>
      <tr>
        <td>Neck</td>
        <td>off shoulder</td>
      </tr>
      <tr>
        <td class="tab">Color</td>
        <td>Blue</td>
      </tr>

      <tr>
        <td class="tab">Solid</td>
        <td>Striped</td>
      </tr>
      <tr>
        <td class="tab" >Pack of </td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
  <br/>
  <h6>Details</h6>
<p> Casual Shoulder  Sleeveless Blue Top</p>
<button type="button" class="btn btn-success">Add to cart</button>
<a href="#" class="btn btn-warning">Buy Now</a>
 
  
 
    </div>
    </div>
    </div>
  )
}

export default Toptwo

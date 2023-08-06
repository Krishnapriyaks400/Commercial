import React from 'react'

function Topthree() {
  return (
    <div class="container mt-3">
    <h4>white style Top</h4>
    <p class="casual">Casual Sleeveless Lace White Top</p> 
    <div class="discount">30% off<del>970</del> 660/-</div>  
    <div class="row">        
    <div class="col"> <img src="top3.jpeg" class="img-thumbnail" alt="dressesone"></img>
    
    </div>
    <div class="col-lg-3">
    <h5>Products Details</h5>
    <table class="table table-borderless">
    
    <tbody>
      <tr>
        <td>Neck</td>
        <td> Round Neck</td>
      </tr>
      <tr>
        <td class="tab">Color</td>
        <td>white</td>
      </tr>

      <tr>
        <td class="tab">Pattern</td>
        <td>Lace</td>
      </tr>
      <tr>
        <td class="tab" >Pack of </td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
  <br/>
  <h6>Details</h6>
<p> Casual Sleeveless Lace White Top</p>
<button type="button" class="btn btn-success">Add to cart</button>
<a href="#" class="btn btn-warning">Buy Now</a>
 
  
 
    </div>
    </div>
    </div>
  )
}

export default Topthree

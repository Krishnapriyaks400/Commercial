import React from 'react'

function Help() {
  return (
    <>
    <h4 class="help"> 24*7 Customer Support</h4>
    <br/>
    <p  class="what">What issue are You facing?</p>
    <div class="issue">
    <button type="button"id="but1" class="btn btn-outline-success">I want to track my order</button><br/>
    <br/>
    <button type="button" id="but2" class="btn btn-outline-success">I want to manage my order</button><br/>
    <br/>
    <button type="button" id="but2" class="btn btn-outline-success">I want to help with returns and order</button><br/>
    <br/>
    <button type="button" id="but2" class="btn btn-outline-success">I want help with other issue</button><br/>
    </div>
    </>
  )
}

export default Help

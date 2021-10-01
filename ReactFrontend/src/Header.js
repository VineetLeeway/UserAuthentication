import React from 'react';
function Header() {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3" style={{textAlign:'left'}} >User Authentication</span>
           <a href="/login" style={{marginLeft:'10px', color:'white', style:'none'}}><span className="h3">Login</span></a>
           <a href="/" style={{marginLeft:'10px', color:'white', style:'none'}}><span className="h3">Register</span></a>
      
            </div>
        </nav>
    )
}
export default Header;
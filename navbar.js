import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">RIN COLLECTION</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link fw-blod fs-4 bg-primary  active" aria-current="page" href="#">Home</a>
        </li>
       
       
      </ul>
      <div className="buttons">
        <button className='buttons'>
            <a href="" className='btn btn-outline-dark' >
              <i className='fa fa-sign-in me-1'></i> Login</a>
              <a href="" className='btn btn-outline-dark ms-2' >
              <i className='fa fa-user-plus me-1'></i> Register</a>
            <a href="" className='btn btn-outline-dark ms-2' >
              <i classNameName='fa fa-shopping-cart me-1'></i>Cart (0)</a>
        </button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

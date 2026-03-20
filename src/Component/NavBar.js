import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(provs1) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/exmple">{provs1.titel}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">{provs1.about}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Link">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a href="/ex"class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/action">Action</a></li>
            <li><a class="dropdown-item" href="another">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a href="/hi" class="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


NavBar.propType =  {
    titel: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    titel: 'NavBar',
    about: 'Home'
}
import React from 'react'
import "./NavBar.css"

function NavBars() {
  return (
    <div className='navbar'>
    <img className='nexflixlogo'   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    <img className='navbaravathar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />



    <div className="icons">
    <i class="fa-solid fa-gift" id='gift'></i>
    <i class="fa-solid fa-bell" id='bell'></i>


    </div>
</div>

  )
}

export default NavBars
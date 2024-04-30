import React from 'react'

const Header = () => {
  return (

    <header>
      <div className="container">
        <div className="brand">
          <a href="/"> LOGO </a>
        </div>

        <nav>
          <ul>
            <li> <a href="/"  > home </a></li>
            <li> <a href="/books"  > books </a></li>
            <li> <a href="/login"> login </a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
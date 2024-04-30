import React from 'react'

const BooksHeader = () => {
  return (

    <header>
      <div className="container">
        <div className="brand">
          <a href="/"> ← </a>
        </div>

        <nav>
          <ul>
            <li> <a href="/" > home </a></li>
            <li> <a href="/books"   >   books   </a></li>
            <li>  <a href="/books/new"> new  </a> </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default BooksHeader
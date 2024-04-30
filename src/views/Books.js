import React, { useState, useContext } from 'react'
import { BooksContext } from "../context/BooksContext"

const Books = () => {

  const {books} = useContext(BooksContext)
  const [search, setSearch] = useState('')

  const handleSeach = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex-col">
      <div>

        <input type='text' onChange={handleSeach} value={search} />
      </div>
        Books
      <div className="books">
        {books.map(book => (
          <a key={book} href={'/books/' + book}>
            book : {book}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Books
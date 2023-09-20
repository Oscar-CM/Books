import React from 'react'

const Books = ({books}) => {
    console.log(books)
  return (
    <div className='grid grid-cols-5'>
        {books?.results?.map((book, idx) => (
            <div key={idx}>
                {book?.author_first_names}
                {book?.title}

            </div>
        ))}


    </div>
  )
}

export default Books
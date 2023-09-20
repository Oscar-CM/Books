"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Books from '@/components/Books';
import AllBooks from '@/components/AllBooks';
import { fetchFromApi } from '@/utils';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';


export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState('12 rules');
  const [books, setBooks] = useState([])

  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {



    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + selectedCategory + '&key=AIzaSyBMIZ7H0c9NHsTun51EXJa9n65RH5_AvgI')
      .then(res => setAllBooks(res))
      .catch(err => console.log(err))

  }, [selectedCategory]);


  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      console.log("Hello")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSelectedCategory(e.target.category.value)
  };

  return (
    <main className='h-[100vh]'>
      <div className='flex gap-1'>

        <div className='hidden lg:block basis-1/6 bg-slate-400'>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

        </div>
        <div className=' flex-auto lg:basis-5/6'>
          <div className=' w-full'>
            <div>
              <img src='./Library.jpg' alt='' className='object-cover opacity-7 h-[50vh] w-full relative' />
              <form
                className=' absolute text-lg text-white top-1/4 left-[20px] -tr -translate-y-1/2 lg:left-[350px] xl:left-[500px]  text-center'
                onSubmit={handleSubmit}
              >
                <p className='mb-10 text-center'>"Reading gives us someplace to go when we have to stay where we are." - <span className='text-sm'>Mason Cooley</span> </p>
                <input
                  type='text'
                  placeholder='Search'
                  className='rounded-lg mr-2 border border-green-800 text-black'
                  id='category'



                />
                <button className='cursor-pointer'>Search</button>
              </form>
            </div>


          </div>
          <AllBooks
            allBooks={allBooks}
            selectedCategory={selectedCategory}

          />
        </div>
      </div>



    </main>
  )
}

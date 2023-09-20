"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const AllBooks = ({ allBooks, selectedCategory }) => {
    console.log(allBooks?.data?.items)



    return (
        <div>
            <div className='flex justify-center m-3 p-3 text-lg text-black bg-slate-200 shadow-3xl font-bold rounded-xl'> {selectedCategory} Books </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 items-center'>

                {allBooks?.data?.items?.map((item) => {
                    let thumbnail = item?.volumeInfo?.imageLinks && item?.volumeInfo?.imageLinks?.smallThumbnail;
                    return (
                        <div key={item?.accessInfo?.id}>
                        <Link href={`/book/${item?.id}`}>

                            <div className='bg-slate-500 h-[250px] overflow-hidden'>
                                <img src={thumbnail} alt={item?.volumeInfo?.title} className='h-[150px] w-[100px]' />

                                <b>{item?.volumeInfo?.title}</b> <br />
                                <p>{item?.volumeInfo?.authors}</p>


                            </div>
                        </Link>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default AllBooks
"use client"
import React from 'react'
import { categories } from '@/utils/constants'


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div>
            <div className='flex items-center justify-center text-lg font-bold text-red-950 mt-3'>
                Popular Books
            </div>

            <div className='p-3 header_gradient text-xl h-[100vh] flex flex-col'>


                <div>
                    {categories.map((category, i) => (
                        <div key={category.name}>
                            <button
                                key={i}
                                className='flex gap-2 ml-3'
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                <span><img src={category.icon} height={25} width={25} alt={category.name} /></span>
                                <span className='text-sm'>{category.name}</span>
                            </button>
                            <br />
                        </div>

                    ))}

                </div>


            </div>

        </div>
    )
}

export default Sidebar
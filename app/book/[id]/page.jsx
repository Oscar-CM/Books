"use client"
import { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import Link from "next/link"
import AllBooks from "@/components/AllBooks"
import axios from "axios"

const Book = () => {

    const [bookDetail, setBookDetail] = useState(null);
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes/' + id + '?key=AIzaSyBMIZ7H0c9NHsTun51EXJa9n65RH5_AvgI')
            .then(res => setBookDetail(res))

            .catch(err => console.log(err))

    }, [id]);

    let thumbnail = bookDetail?.data?.volumeInfo?.imageLinks?.thumbnail
    return (
        <div className="bg-slate-300 min-h-[100vh]">
           
            <div className="flex justify-start">
                <div>
                    <img
                        src={thumbnail}
                        alt=""
                        className='h-[250] w-[200px] ml-3'
                    />
                </div>
                <div className="ml-5">
                    <h1><span className="font-bold">Title: </span>{bookDetail?.data?.volumeInfo?.title}</h1>
                    <p><span className="font-bold">Authors:</span> {bookDetail?.data?.volumeInfo?.authors}</p>
                    <p ><span className="font-bold">Publisher:</span> {bookDetail?.data?.volumeInfo?.publisher}</p>
                    <p><span className="font-bold">Published Date:</span> {bookDetail?.data?.volumeInfo?.publishedDate}</p>
                    <Link href='/contact'>
                    <button className="bg-green-600 p-4 ml-6 lg:ml-10 rounded-lg mt-2 text-white"> Get this Book</button>
                    </Link>      
                </div>     
            </div>
            <div className="mt-3 p-3">
                <h1 className="text-lg font-semibold"> Summary </h1>
            <div dangerouslySetInnerHTML={{ __html: bookDetail?.data?.volumeInfo?.description }} />

            </div>
        </div>
    )
}

export default Book
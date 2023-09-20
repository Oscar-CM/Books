import React from 'react'

const Contact = () => {
    return (
        <div className='h-screen'>
            <img src='/contact.jpg' alt='' className='w-full h-[100vh] object-cover opacity-70 relative' />

            <form className=' absolute text-lg text-white mt-[200px] top-1/4 left-[10px] -tr -translate-y-1/2 lg:left-[350px] xl:left-[350px]  text-center'>
                <p className='mb-10 text-center'>"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, <br />and the most patient of teachers."  <span className='text-sm'>- Charles W. Eliot</span> </p>
                <div className='p-3 m-3 bg-slate-600 rounded-md'>
                    <h1> Get in touch for Hard or Soft Copies of the books</h1>
                    <p className='text-sm italic mb-4'>NB: Inquire first if the book is available for the  hard copies</p>
                    <div className='flex gap-5 justify-center mt-4'>
                        <img src='/phone.png' alt='' width={30} height={30} />
                        <p>0747770747</p>

                    </div>
                    <div className='flex gap-5 justify-center mt-4'>
                        <img src='/email1.png' alt='' width={30} height={30} />
                        <p>bookhub99@gmail.com</p>

                    </div>
                    <div className='flex gap-5 justify-center mt-4'>
                        <img src='/whatsapp.png' alt='' width={30} height={30} />
                        <p>0747770747</p>

                    </div>
                    <div className='flex gap-5 justify-center mt-4'>
                        <img src='/telegram.png' alt='' width={30} height={30} />
                        <p>0747770747</p>

                    </div>

                </div>

            </form>
            Contact

        </div>
    )
}

export default Contact
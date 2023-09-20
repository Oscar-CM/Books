import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className='bg-slate-400 min-h-[100vh]'>
            <div className='p-5'>
                <h2 className='font-bold'>About Us</h2>
                <h1>

                    Welcome to Book Hub, your online destination for a world of knowledge, adventure, and inspiration through the magic of books. Our mission is simple: to connect readers with the stories, information, and ideas that matter most to them.
                </h1>
                <h2 className='font-bold'>Our Story</h2>
                <h1>

                    Founded by a group of passionate book lovers, Book Hub was born from the belief that books have the power to transform lives. Whether you're seeking an escape to distant realms, looking to expand your knowledge, or searching for personal growth, we're here to guide you on your literary journey.
                </h1>
                <h2 className='font-bold'>Our Vision</h2>
                <h1>

                    At Book Hub, we envision a world where the written word continues to inspire, educate, and unite. We're not just selling books; we're fostering a love for reading that transcends pages and enriches lives.
                </h1>

                <h2 className='font-bold'>Get in Touch</h2>
                <h1>

                Have questions, suggestions, or just want to chat about books? We'd love to hear from you! <Link href='/contact' className='text-blue-900'>Contact us</Link>, and we'll be happy to assist you.

Thank you for choosing Book Hub as your trusted source for literary treasures. Let's embark on a reading adventure together!
                </h1>
            </div>

        </div>
    )
}

export default About
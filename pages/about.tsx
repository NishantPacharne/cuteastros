import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>about cuteastro</title>
        </Head>
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
                <h1 className='heading text-xl font-bold'>about cuteastros</h1>
                <p className='body-font mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem accusantium voluptatem, quia labore reiciendis, eveniet repudiandae quam architecto minima deleniti tenetur sunt itaque aspernatur deserunt est beatae! Ea, nesciunt eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem accusantium voluptatem, quia labore reiciendis, eveniet repudiandae quam architecto minima deleniti tenetur sunt itaque aspernatur deserunt est beatae! Ea, nesciunt eveniet.</p>
                <div>
                    <p className='mt-6 body-font'>made with ❤ by <a href="#" target="_blank" rel="noopener noreferrer">@nishant_py</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default about
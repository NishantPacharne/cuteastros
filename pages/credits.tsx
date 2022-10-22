import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>cuteastros credits</title>
        </Head>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
            <h1 className='heading text-xl font-bold'>credits</h1>
            <p className='body-font mt-4'>
              Background <a href="https://www.freepik.com/free-vector/planets-outer-space-with-satellites-meteors-illustration_6690897.htm#query=space&position=0&from_view=search&track=sph" target="_blank" rel="noopener noreferrer" className='underline'>image by vectorpouch</a> on Freepik
              <br/>
              <br/>
              astronauts <a href="https://www.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_10764053.htm#query=astronot&position=1&from_view=search&track=sph" target="_blank" className='underline' rel="noopener noreferrer"> by catalyststuff</a> on Freepik
            </p>
        </div>
      </div>
    </>
  )
}

export default about
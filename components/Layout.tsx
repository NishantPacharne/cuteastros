import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router';



type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
  const router = useRouter();

  return (
    <>
        <Head>
            <title>cuteastro</title>
            <meta name="description" content="cuteastro" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Montserrat:wght@700&display=swap" rel="stylesheet"/>
        </Head>

        <div className='w-full min-h-screen'>
            <nav className='mt-4 mr-6'>
            <ul className='flex justify-end items-center gap-x-4 body-font'>
                
                <li className={`${router.asPath == "/"? 'font-bold text-white': 'text-slate-400'}`}><Link href='/'>mint</Link></li>
                <li className={`${router.asPath == "/about"? 'font-bold text-white': 'text-slate-400'}`}><Link href="/about">about</Link></li>
                <li className={`${router.asPath == "/credits"? 'font-bold text-white': 'text-slate-400'}`}><Link href="/credits">credits</Link></li>
            </ul>
            </nav>

            <main className='min-h-[90vh] flex justify-center'>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout
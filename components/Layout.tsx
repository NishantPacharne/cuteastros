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
            <title>cuteastros</title>
            <meta name="description" content="cuteastros is a unique collection of cute astronauts"/>
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
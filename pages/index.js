import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { useState } from 'react'

export default function Home() {
    
    return (
        <div>
            <Head>
                <title>Accueil - LME</title>
                <meta name="description" content="Laboratoire Matériaux et Environnement" />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            
            {/* H E A D E R */}
            <Header />

            {/* N A V B A R */}
            <Navbar />

            {/* C O N T E N T */}
            <main className='w-full py-4 px-6'></main>
        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import SvgLogo from '../components/svg-logo'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Accueil - LME</title>
                <meta name="description" content="Laboratoire Matériaux et Environnement" />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            
            {/* H E A D E R */}
            <header className='w-full h-32 bg-[url("/img/patterns.png")] flex gap-5 items-center'>
                <Image src='/img/header-logo.png' width='250px' height='128px' />
                <SvgLogo />
            </header>

            {/* N A V B A R */}
            <nav className='w-full h-16 bg-green-500'></nav>
        </div>
    )
}

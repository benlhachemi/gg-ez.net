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
            <header className='relative w-full h-32 bg-[url("/img/patterns.png")] flex gap-12 items-center'>
                <Image src='/img/header-logo.png' width='250px' height='128px' />
                <div className='hidden lg:block'><SvgLogo /></div>
                <div className="header-nav hidden absolute lg:flex top-2 right-12 gap-5">
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Annuaire</h1>
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Nous contacter</h1>
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Se connecter</h1>
                </div>
                <div className="header-nav absolute lg:hidden top-2/4 right-2 -translate-y-2/4">
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Annuaire</h1>
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Nous contacter</h1>
                    <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Se connecter</h1>
                </div>
            </header>

            {/* N A V B A R */}
            <nav className='w-full h-14 bg-green-600 px-20 pl-60 font-bold flex gap-10 text-gray-100 shadow-md text-sm items-center'>
                <h1 className='cursor-pointer hover:mb-1'>PRODUCTION SCIENTIFIQUES</h1>
                <h1 className='cursor-pointer hover:mb-1'>PARTENARIATS</h1>
                <h1 className='cursor-pointer hover:mb-1'>ACTUALITES</h1>
                <h1 className='cursor-pointer hover:mb-1'>FORMATION</h1>
            </nav>
        </div>
    )
}

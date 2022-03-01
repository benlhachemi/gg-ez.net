import SvgLogo from './svg-logo'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='relative w-full h-32 bg-[url("/img/patterns.png")] lg:flex lg:gap-12 items-center'>
            <Link href="/"><Image src='/img/header-logo.png' className='cursor-pointer' width={'600'} height={'128px'} /></Link>
            <div className='hidden lg:block'><SvgLogo /></div>
            <div className="header-nav hidden absolute lg:flex top-2 right-12 gap-5">
                <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Annuaire</h1>
                <h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Nous contacter</h1>
                <Link href="/connexion"><h1 className='text-gray-400 hover:text-gray-500 font-bold text-md cursor-pointer'>Se connecter</h1></Link>
            </div>
        </header>
    )
}

export default Header
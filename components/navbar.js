import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import 'animate.css'

const Navbar = () => {
    //useState HOOKS
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    //main render
    return (
        <nav className='w-full lg:h-full bg-green-600 px-5 lg:px-20 lg:pl-60 font-bold lg:flex gap-10 text-gray-100 shadow-md text-sm items-center'>
            <div className='lg:hidden'><MenuIcon onClick={e => setMobileMenuActive(!mobileMenuActive)} className='lg:hidden bg-black bg-opacity-25 w-16 h-10 py-2 rounded-md cursor-pointer my-2 animate__animated animate__bounceInDown'/></div>
            <div className={`${mobileMenuActive ? 'block' : 'hidden'} lg:hidden py-2 animate__animated animate__bounceInUp`}>
                <h1 className='text-gray-100 my-3'>Mot de la direction</h1>
                <h1 className='text-gray-100 my-3'>Organigramme</h1>
                <h1 className='text-gray-100 my-3'>Structuration de la recherche</h1>
                <h1 className='text-gray-100 my-3'>Partenariats</h1>
                <h1 className='text-gray-100 my-3'>Formation</h1>
                <h1 className='text-gray-100 my-3'>Actualités</h1>
                <h1 className='text-gray-100 my-3'>Thémes et axes de recherche</h1>
                <h1 className='text-gray-100 my-3'>Publications</h1>
                <h1 className='text-gray-100 my-3'>Communications</h1>
                <h1 className='text-gray-100 my-3'>Thèses soutenues</h1>
                <h1 className='text-gray-100 my-3'>Projets de recherhce</h1>
                <h1 className='text-gray-100 my-3'>Brevets</h1>
            </div>
            <h1 className='menu-1 hidden relative lg:block py-5 cursor-pointer'>
                LE LABORATOIRE
                <KeyboardArrowDownIcon />
                <div className='dropdown-1 absolute rounded-md shadow bg-gray-100 w-72 min-h-28 top-full hidden py-1 px-4'>
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Mot de la direction</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Organigramme</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Structuration de la recherche</h1>
                </div>
            </h1>
            <h1 className='menu-1 hidden relative lg:block py-5 cursor-pointer'>
                PRODUCTION SCIENTIFIQUES
                <KeyboardArrowDownIcon />
                <div className='dropdown-1 absolute rounded-md shadow bg-gray-100 w-72 min-h-28 top-full hidden py-1 px-4'>
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Thémes et axes de recherche</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Publications</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Communications</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Thèses soutenues</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Projets de recherhce</h1><hr />
                    <h1 className='text-gray-400 my-3 hover:text-gray-500'>Brevets</h1>
                </div>
            </h1>
            <h1 className='hidden lg:block py-5 cursor-pointer'>PARTENARIATS</h1>
            <h1 className='hidden lg:block py-5 cursor-pointer'>ACTUALITES</h1>
            <h1 className='hidden lg:block py-5 cursor-pointer'>FORMATION</h1>
        </nav>
    )
}

export default Navbar
//import
import Header from '../components/header'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Link from 'next/link'

const Connexion = () => {
    return (
        <div>
            <Head>
                <title>Connexion - LME</title>
                <meta name="description" content="Connexion a l'espace personel du laboratoire" />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            
            {/* H E A D E R */}
            <Header />

            {/* N A V B A R */}
            <Navbar />

            {/* C O N T E N T */}
            <main className='w-full py-4 px-6 min-h-screen bg-[url("/img/bg.jpg")]'>
                <div className='w-2/6 mx-auto rounded-md shadow-md py-7 px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-2xl font-bold mb-5'>Connexion</h1>
                    <form>
                        <input required type="email" className='w-4/6 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='email...' />
                        <input required type="password" className='w-4/6 mt-5 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='mot de passe...' /><br />
                        <button className="mx-auto bg-green-500 mt-5 text-white font-bold py-3 px-7 rounded-md shadow-md animate__animated animate__infinite animate__pulse">Se connecter</button>
                    </form>
                </div>
                <div className='w-2/6 mx-auto rounded-md shadow-md py-7 px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-lg font-bold'>Vous n'avez pas de compte ? <Link href="/inscription"><span className='text-blue-400 cursor-pointer'>Clique ici </span></Link>pour créer un</h1>
                </div>
            </main>
        </div>
    )
}

export default Connexion
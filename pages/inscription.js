//import
import Header from '../components/header'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'
import { useState } from 'react'

const Inscription = () => {
    //useState HOOKS
    const [nom_complet, setNomComplet] = useState()
    const [email, setEmail] = useState()
    const [mot_de_passe, setMotDePasse] = useState()

    const [alert, setAlert] = useState(false)
    const [alert_msg, setAlertMsg] = useState()
    const [alert_type, setAlertType] = useState()

    //functions
    const inscription = async(e) => {
        e.preventDefault()
        Axios({
            method: 'POST',
            url: '/api/inscription',
            data: {
                nom_complet: nom_complet,
                email: email,
                mot_de_passe: mot_de_passe
            }
        }).then(res => {
            if(res.data.error){
                setAlert(true)
                setAlertMsg(res.data.error)
                setAlertType('error')
                setNomComplet('')
                setEmail('')
                setMotDePasse('')
                setTimeout(() => {
                    setAlert(false)
                    setAlertMsg()
                    setAlertType()
                }, 5000)
                return 0
            }
        })
    }

    //main render
    return (
        <div>
            <Head>
                <title>Inscription - LME</title>
                <meta name="description" content="Inscription a l'espace personel du laboratoire" />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            
            {/* H E A D E R */}
            <Header />

            {/* N A V B A R */}
            <Navbar />

            {/* C O N T E N T */}
            <main className='w-full py-4 px-6 min-h-screen bg-[url("/img/bg.jpg")]'>
                <div className='w-2/6 mx-auto rounded-md shadow-md py-7 px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-2xl font-bold mb-5'>Inscription</h1>
                    {alert && alert_msg && alert_type && <div className={`${alert_type == 'success' ? 'bg-green-500' : 'bg-red-500'} rounded-md mx-auto w-5/6 shadow my-4 py-3 px-5 text-center text-gray-100 font-bold`}>{alert_msg}</div>}
                    <form onSubmit={e => inscription(e)}>
                        <input value={nom_complet} onChange={e => setNomComplet(e.target.value)} required type="text" className='w-4/6 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold mb-5' placeholder='Nom complet...' />
                        <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className='w-4/6 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='email...' />
                        <input value={mot_de_passe} onChange={e => setMotDePasse(e.target.value)} required type="password" className='w-4/6 mt-5 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='mot de passe...' /><br />
                        <button className="mx-auto bg-green-500 mt-5 text-white font-bold py-3 px-7 rounded-md shadow-md animate__animated animate__infinite animate__pulse">Inscription</button>
                    </form>
                </div>
                <div className='w-2/6 mx-auto rounded-md shadow-md py-7 px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-lg font-bold'>Vous avez déja un compte ? <Link href="/connexion"><span className='text-blue-400 cursor-pointer'>Clique ici </span></Link>pour se connecter</h1>
                </div>
            </main>
        </div>
    )
}

export default Inscription
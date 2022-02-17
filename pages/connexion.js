//import
import Header from '../components/header'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import useAuth from '../hooks/useAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import firebaseApp from '../database/config/firebase'
import Image from 'next/image'

//global variables
const auth = getAuth(firebaseApp)

const Connexion = () => {
    //useAuth HOOKS
    const [user, loading] = useAuth()

    //Firebase HOOKS
    const [google_user, loadingGoogle] = useAuthState(auth)

    //useState HOOKS
    const [email, setEmail] = useState()
    const [mot_de_passe, setMotDePasse] = useState()

    const [alert, setAlert] = useState(false)
    const [alert_msg, setAlertMsg] = useState()
    const [alert_type, setAlertType] = useState()

    //useEffect HOOKS
    useEffect(() => {
        if(user) window.location.href = '/espace'
    }, [user])

    //functions
    const googleSignUp = async() => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(res => {
            if(google_user){
                Axios({
                    method: 'POST',
                    url: '/api/connexion',
                    data: {
                        email: google_user.email,
                        google: true
                    }
                }).then(res => {
                    if(!res.data.error){
                        window.location.href = '/espace'
                        window.localStorage.setItem('session_id', res.data.session_id)
                        return 0
                    }
                    setAlert(true)
                    setAlertMsg(res.data.error_message)
                    setAlertType('error')
                    setEmail('')
                    setMotDePasse('')
                    setTimeout(() => {
                        setAlert(false)
                        setAlertMsg()
                        setAlertType()
                    }, 5000)
                    return 0
                })
            }
        })
    }

    const connexion = async(e) => {
        e.preventDefault()
        if(!email || !mot_de_passe){
            setAlert(true)
            setAlertMsg('Veuillez remplir tous les champs')
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
        Axios({
            method: 'POST',
            url: '/api/connexion',
            data: {
                email: email,
                mot_de_passe: mot_de_passe,
                google: false
            }
        }).then(res => {
            if(res.data.error){
                setAlert(true)
                setAlertMsg(res.data.error_message)
                setAlertType('error')
                setEmail('')
                setMotDePasse('')
                setTimeout(() => {
                    setAlert(false)
                    setAlertMsg()
                    setAlertType()
                }, 5000)
                return 0
            }
            window.localStorage.setItem('session_id', res.data.session_id)
        })
    }

    //main render
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
                <div className='w-full lg:w-2/6 mx-auto rounded-md shadow-md py-7 lg:px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-2xl font-bold mb-5'>Connexion</h1>
                    {alert && alert_msg && alert_type && <div className={`${alert_type == 'success' ? 'bg-green-500' : 'bg-red-500'} rounded-md mx-auto w-5/6 shadow my-4 py-3 px-5 text-center text-gray-100 font-bold`}>{alert_msg}</div>}
                    <form onSubmit={e => connexion(e)}>
                        <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className='w-4/6 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='email...' />
                        <input value={mot_de_passe} onChange={e => setMotDePasse(e.target.value)} required type="password" className='w-4/6 mt-5 rounded shadow-sm py-2 px-3 text-center text-gray-700 font-bold' placeholder='mot de passe...' /><br />
                        <button className="mx-auto bg-green-500 mt-5 text-white font-bold py-3 px-7 rounded-md shadow-md animate__animated animate__infinite animate__pulse">Se connecter</button>
                    </form>
                    <button onClick={googleSignUp} className="mx-auto bg-gray-200 items-center hover:scale-105 mt-5 text-gray-700 border-2 flex font-bold py-3 px-7 rounded-md shadow-md"><Image src="/img/google.png" width="30px" height="30px" /> Se connecter avec Google</button>
                </div>
                <div className='w-full lg:w-2/6 mx-auto rounded-md shadow-md py-7 px-7 text-center items-center justify-center bg-gray-100 my-10'>
                    <h1 className='text-gray-600 text-lg font-bold'>Vous n&apos;avez pas de compte ? <Link href="/inscription"><span className='text-blue-400 cursor-pointer'>Clique ici </span></Link>pour créer un</h1>
                </div>
            </main>
        </div>
    )
}

export default Connexion
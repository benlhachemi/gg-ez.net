import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import CircularProgress from '@mui/material/CircularProgress'
import Axios from 'axios'
import Sidebar from '../../components/sidebar'
import { useState, useEffect } from "react"
import 'animate.css'

const Ajouter = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()

    const [alert, setAlert] = useState(false)
    const [alert_message, setAlertMessage] = useState()
    const [alert_type, setAlertType] = useState()

    const [titre, setTitre] = useState()
    const [auteur, setAuteur] = useState()
    const [date, setDate] = useState()
    const [reference, setRef] = useState()
    const [lien, setLien] = useState()

    //useEffects HOOKS

    //functions
    const redirect_sign_in = () => {
        window.location.href = '/connexion'
    }

    const redirect_home = () => {
        window.location.href = '/espace'
    }

    const diffuser = async(e) => {
        e.preventDefault()
        if(!titre || !auteur || !lien || !date){
            setAlert(true)
            setAlertType('error')
            setAlertMessage('Veuillez remplir tous les champs*')
            setTimeout(() => {
                setAlert(false)
                setAlertType(false)
                setAlertMessage(false)
            }, 3000)
            return 0
        }
        Axios({
            method: 'POST',
            url: '/api/ajouter-these',
            data: {
                titre: titre,
                auteur: auteur,
                date: date,
                lien: lien
            }
        }).then(res => {
            if(res.data.error){
                setAlert(true)
                setAlertType('error')
                setAlertMessage('Erreur. Veuillez ressayer')
                setTimeout(() => {
                    setAlert(false)
                    setAlertType(false)
                    setAlertMessage(false)
                }, 3000)
                return 0
            }
            setAlert(true)
            setAlertType('success')
            setAlertMessage('Thése publié ✅')
            setTimeout(() => {
                setAlert(false)
                setAlertType(false)
                setAlertMessage(false)
            }, 5000)
            return 0
        })
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : user && (user.role !== 'admin' && user.role === 'ECSAE' && user.role !== 'ECAE' && user.role !== 'EPCME' && user.role !== 'EEMI' && user.role !== 'permanent') ? redirect_home() : 
                <div className="w-full min-h-screen bg-gray-100 flex">
                    <Sidebar user={user} />
                    <div className="content min-h-screen w-full py-5 px-5">
                        {alert && alert_type && alert_message && 
                            <h1 className={`py-2 my-3 w-2/4 px-6 font-bold text-center text-lg rounded-md shadow-md text-white ${alert_type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>{alert_message}</h1>
                        }
                        <h1 className="text-gray-700 font-bold text-2xl">Ajouter nouvelle Thése 🎓</h1>
                        <form onSubmit={e => diffuser(e)} className="my-5">
                            <input onChange={e => setTitre(e.target.value)} type="text" className="py-2 px-6 text-center rounded-md shadow-md w-96 my-2" placeholder="Titre de la thèse..." /><br />
                            <input onChange={e => setAuteur(e.target.value)} type="text" className="py-2 px-6 text-center rounded-md shadow-md w-96 my-2" placeholder="Auteur de la thèse..." /><br />
                            <input onChange={e => setDate(e.target.value)} type="text" className="py-2 px-6 text-center rounded-md shadow-md w-96 my-2" placeholder="Date de la thèse..." /><br />
                            <input onChange={e => setLien(e.target.value)} type="text" className="py-2 px-6 text-center rounded-md shadow-md w-96 my-2" placeholder="Lien web..." /><br />
                            <br />
                            <button className="mx-auto py-2 px-3 font-bold text-light rounded-md shadow-md hover:scale-105 transition-all my-3 text-white bg-green-500">Diffuser</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Ajouter
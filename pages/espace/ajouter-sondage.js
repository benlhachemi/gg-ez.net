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

    const [groupe, setGroupe] = useState([])
    const [message, setMessage] = useState()

    //useEffects HOOKS
    useEffect(() => {
        console.log(groupe)
    }, [groupe])

    //functions
    const redirect_sign_in = () => {
        window.location.href = '/connexion'
    }

    const redirect_home = () => {
        window.location.href = '/espace'
    }

    const add_to_group = (e) => {
        if(e.target.checked) return setGroupe([...groupe, e.target.value])
        let temp_groupe = [...groupe]
        const index = temp_groupe.indexOf(e.target.value)
        if (index > -1) temp_groupe.splice(index, 1)
        setGroupe(temp_groupe)
    }

    const diffuser = async(e) => {
        e.preventDefault()
        if(groupe.length === 0){
            setAlert(true)
            setAlertType('error')
            setAlertMessage('Veuillez spécifier a qui diffuser le sondage')
            setTimeout(() => {
                setAlert(false)
                setAlertType(false)
                setAlertMessage(false)
            }, 3000)
            return 0
        }
        if(!message){
            setAlert(true)
            setAlertType('error')
            setAlertMessage('Veuillez entrer un message')
            setTimeout(() => {
                setAlert(false)
                setAlertType(false)
                setAlertMessage(false)
            }, 3000)
            return 0
        }
        Axios({
            method: 'POST',
            url: '/api/ajouter-sondage',
            data: {
                message: message,
                auteur: user.nom_complet,
                groupe: groupe
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
            setAlertMessage('sondage publié ✅')
            return 0
        })
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : user && user.role !== 'admin' ? redirect_home() : 
                <div className="w-full min-h-screen bg-gray-100 flex">
                    <Sidebar user={user} />
                    <div className="content min-h-screen w-full py-5 px-5">
                        {alert && alert_type && alert_message ? 
                            <h1 className={`py-2 my-3 w-2/4 px-6 font-bold text-center text-lg rounded-md shadow-md text-white ${alert_type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>{alert_message}</h1>
                        :
                        <>
                        <h1 className="text-gray-700 font-bold text-2xl">Ajouter nouveau sondage 📅</h1>
                        <form onSubmit={e => diffuser(e)} className="my-5">
                            <input onChange={e => setMessage(e.target.value)} type="text" className="py-2 px-6 text-center rounded-md shadow-md w-96 my-2" placeholder="Message a afficher..." /><br />
                            <span className="text-gray-700 font-bold text-md my-2">Diffuser pour : </span>
                            
                            <input value="responsable" onChange={e => add_to_group(e)} type="checkbox" className="mr-1 ml-4 my-2" />Les responsables d&apos;équipes
                            <input value="doctorant" onChange={e => add_to_group(e)} type="checkbox" className="mr-1 ml-4 my-2" />Doctorants
                            <input value="permanent" onChange={e => add_to_group(e)} type="checkbox" className="mr-1 ml-4 my-2" />Permanents
                            <input value="associe" onChange={e => add_to_group(e)} type="checkbox" className="mr-1 ml-4 my-2" />Associés
                            <br />
                            <button className="mx-auto py-2 px-3 font-bold text-light rounded-md shadow-md hover:scale-105 transition-all my-3 text-white bg-green-500">Diffuser</button>
                        </form>
                        </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Ajouter
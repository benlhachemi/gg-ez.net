import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import Axios from 'axios'
import Sidebar from '../../components/sidebar'
import { useState, useEffect } from "react"
import 'animate.css'

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()

    const [alert, setAlert] = useState(false)
    const [alert_message, setAlertMessage] = useState()
    const [alert_type, setAlertType] = useState()

    const [informations, setInformations] = useState(false)
    const [infoLoading, setInfoLoading] = useState(true)

    //useEffects HOOKS
    useEffect(() => {
        if(user){
            Axios({
                method: 'POST',
                url: '/api/get-information',
                data: {role: user.role}
            }).then(res => {
                setInfoLoading(false)
                if(!res.data.error && res.data.informations.length > 0) setInformations(res.data.informations)
            })
        }
    }, [user])

    //functions
    const redirect_sign_in = () => {
        window.location.href = '/connexion'
    }

    const redirect_home = () => {
        window.location.href = '/espace'
    }

    const supprimer = (e, id) => {
        Axios({
            method: 'DELETE',
            url: '/api/supprimer-information',
            data: {id: id}
        }).then(res => {
            if(!res.data.error) return e.target.parentNode.style.display = 'none'
            setAlert(true)
            setAlertMessage('Erreur! Veuillez ressayer.')
            setAlertType('error')
            setTimeout(() => {
                setAlert(false)
                setAlertMessage()
                setAlertType()
            }, 3000)
        })
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : user && user.role !== 'admin' ? redirect_home() : 
                <div className="w-full min-h-screen bg-gray-100 flex">
                    <Sidebar user={user} />
                    <div className="content min-h-screen w-full py-5 px-5">
                        {alert && alert_type && alert_message && 
                            <h1 className={`py-2 my-3 w-2/4 px-6 font-bold text-center text-lg rounded-md shadow-md text-white ${alert_type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>{alert_message}</h1>
                        }
                        <h1 className="text-gray-700 font-bold text-2xl">Supprimer une information</h1>
                        
                        <div className="grid grid-cols-4 gap-2 my-5 text-center">
                            {informations && informations.map((elt, i) => (
                                <div key={i} className="bg-gray-700 font-bold animate__animated animate__fadeIn w-full text-center rounded-md shadow-md py-2 px-4 text-gray-100 mx-auto my-4" style={{animationDelay: i/10 + 's'}}>
                                    <h1 className="my-2 text-xl text-gray-200"><span className="text-gray-400">Titre : </span> {elt.titre}</h1>
                                    <p><span className="text-gray-400">Description : </span>{elt.description}</p>
                                    <button onClick={e => supprimer(e, elt._id)} className="mx-auto my-3 py-2 px-5 rounded-md shadow-md text-center font-bold text-white bg-red-500 hover:scale-105 transition-all">Supprimer</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Index
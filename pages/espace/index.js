import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import Sidebar from '../../components/sidebar'
import Axios from 'axios'
import 'animate.css'
import { useState, useEffect } from "react"

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()

    //useState HOOKS
    const [informations, setInformations] = useState(false)
    const [infoLoading, setInfoLoading] = useState(true)

    //useEffect HOOKS
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

    const deconnexion = async() => {
        window.localStorage.removeItem('session_id')
        Axios({
            method: 'DELETE',
            url: '/api/destroy-session',
            data: user.session_id
        })
        .then(res => window.location.reload())
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : 
            <div className="w-full min-h-screen bg-gray-100 flex">
                <Sidebar user={user} />
                <div className="content min-h-screen w-full px-8 py-5">
                    <h1 className="text-gray-100 animate__animated animate__bounceIn font-bold text-xl rounded-md shadow-md py-3 px-3 w-3/4 bg-gray-700 mx-auto text-center">Bienvenue Mr/Mme {user.nom_complet} a votre espace peronnel</h1>
                    {informations && informations.map(elt => (
                        <div className="bg-blue-500 font-bold animate__animated animate__fadeInRight text-center rounded-md w-2/4 shadow-md py-2 px-4 text-gray-100 mx-auto my-4">
                            <h1 className="text-sm bg-black bg-opacity-20 py-2 rounded-md shadow-md text-gray-200 my-2">{elt.auteur} a partagé avec vous une information</h1>
                            <h1 className="text-xl my-2">{elt.titre}</h1>
                            <p className="text-md my-2">{elt.description}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Index
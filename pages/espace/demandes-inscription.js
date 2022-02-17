import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import CircularProgress from '@mui/material/CircularProgress'
import Axios from 'axios'
import Sidebar from '../../components/sidebar'
import { useState, useEffect } from "react"
import 'animate.css'

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()
    const [demandes_inscription, setDemandesInscription] = useState([])
    const [demandes_loading, setDemandesLoading] = useState(true)

    //useEffect HOOKS
    useEffect(() => {
        if(user){
            Axios({
                method: 'POST',
                url: '/api/demandes-inscription',
                data: {user_id: user.user_id}
            }).then(res => {
                setDemandesLoading(false)
                if(!res.data.error) return setDemandesInscription(res.data.demandes)
                window.location.href = '/espace'
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

    const get_date = (e) => {
        const d = new Date(e.date_inscription)
        return (d.getDate() + '/' + (parseInt(d.getMonth()) + 1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes())
    }

    const deconnexion = () => {
        window.localStorage.removeItem('session_id')
        Axios({
            method: 'DELETE',
            url: '/api/destroy-session',
            data: user.session_id
        })
        window.location.reload()
    }

    const refuser = async(id, e) => {
        Axios({
            method: 'DELETE',
            url: '/api/refuser',
            data: {user_id: id}
        }).then(res => {
            e.target.parentNode.parentNode.style.display = 'none'
        })
    }

    const accepter = async(id, e) => {
        const select = e.target.parentNode.parentNode.querySelector('select')
        const value = select.options[select.selectedIndex].value
        if(value === 'null'){
            e.target.parentNode.parentNode.querySelector('select').classList.add('animate__shakeX')
            setTimeout(() => {
                e.target.parentNode.parentNode.querySelector('select').classList.remove('animate__shakeX')
            }, 1000)
            return 0
        }
        Axios({
            method: 'PUT',
            url: '/api/accepter',
            data: {
                user_id: id,
                role: value
            }
        }).then(res => {
            e.target.parentNode.parentNode.style.display = 'none'
        })
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : user && user.role !== 'admin' ? redirect_home() : 
                <div className="w-full min-h-screen bg-gray-100 flex">
                    <Sidebar user={user} />
                    <div className="content min-h-screen w-full py-5 px-5">
                        {demandes_loading ? <CircularProgress /> : demandes_inscription && demandes_inscription.length === 0 ? 
                        <div className="mx-auto py-3 px-4 text-center shadow-md rounded-md w-2/4 my-10 bg-red-400 text-white font-bold">Il n&apos;ya aucune nouvelle demande d&apos;inscription pour le moment. 📝</div> :
                        <div>
                            {demandes_inscription.map((elt, i) => (
                                <div key={i} className="my-5 cursor-pointer w-2/5 rounded-md shadow-md py-4 mx-auto px-5 text-gray-700 bg-gray-300">
                                    <h1 className="text-lg my-2"><span className="font-bold">Nom complet : </span>{elt.nom_complet}</h1>
                                    <h1 className="text-lg my-2"><span className="font-bold">Email : </span>{elt.email}</h1>
                                    <h1 className="text-lg my-2"><span className="font-bold">Date d&apos;inscription : </span>{get_date(elt)}</h1>
                                    <h1 className="text-lg my-2"><span className="font-bold">Role : </span>
                                        <select className="rounded-md shadow-md py-1 px-3 animate__animated">
                                            <option value="null" selected>Choisir un role</option>
                                            <option value="admin">Administrateur</option>
                                            <option value="ECSAE">Responsable d&apos;équipe ECSAE</option>
                                            <option value="ECAE">Responsable d&apos;équipe ECAE</option>
                                            <option value="EPCME">Responsable d&apos;équipe EPCME</option>
                                            <option value="EEMI">Responsable d&apos;équipe EEMI</option>
                                            <option value="permanent">Permanent</option>
                                            <option value="associe">Associé</option>
                                            <option value="doctorant">Doctorant</option>
                                        </select>
                                    </h1>
                                    <div className="flex gap-2">
                                        <button onClick={e => accepter(elt._id, e)} className="py-2 px-3 font-bold bg-green-500 rounded-md shadow-md text-white mt-2 hover:scale-105 transition-all">Accepter</button>
                                        <button onClick={e => refuser(elt._id, e)} className="py-2 px-3 font-bold bg-red-500 rounded-md shadow-md text-white mt-2 hover:scale-105 transition-all">Refuser</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Index
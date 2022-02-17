import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import Sidebar from '../../components/sidebar'
import Axios from 'axios'
import 'animate.css'
import { useState, useEffect } from "react"

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()
    console.log(user)

    //useState HOOKS
    const [informations, setInformations] = useState(false)
    const [sondages, setSondages] = useState(false)

    //useEffect HOOKS
    useEffect(() => {
        if(user){
            Axios({
                method: 'POST',
                url: '/api/get-information',
                data: {role: user.role}
            }).then(res => {
                if(!res.data.error && res.data.informations.length > 0) setInformations(res.data.informations)
            })

            Axios({
                method: 'POST',
                url: '/api/get-sondage',
                data: {role: user.role}
            }).then(res => {
                if(!res.data.error && res.data.sondage.length > 0) setSondages(res.data.sondage)
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

    const Choisir = async (vote, e, id, votes) => {
        Axios({
            method: 'PUT',
            url: '/api/ajouter-vote',
            data: {
                vote: vote,
                user_id: user.user_id,
                sondage_id: id,
                votes: votes
            }
        })
        const btns = e.target.parentNode.querySelector('button').style.display = 'none'
    }

    const count = (arr, string) => {
        let counter = 0
        arr.forEach(elt => {
            if(elt === string) counter++
        })
        return ` ( ${counter} )`
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user ? redirect_sign_in() : 
            <div className="w-full min-h-screen bg-gray-100 flex">
                <Sidebar user={user} />
                <div className="content min-h-screen w-full px-8 py-5">
                    <h1 className="text-gray-100 animate__animated animate__bounceIn font-bold text-xl rounded-md shadow-md py-3 px-3 w-3/4 bg-gray-700 mx-auto text-center">Bienvenue Mr/Mme {user.nom_complet} a votre espace peronnel 👋</h1>
                    {informations && informations.map((elt, i) => (
                        <div key={i} className="bg-blue-500 font-bold animate__animated animate__fadeInRight text-center rounded-md w-2/4 shadow-md py-2 px-4 text-gray-100 mx-auto my-4" style={{animationDelay: i/10 + 's'}}>
                            <h1 className="text-sm bg-black bg-opacity-20 py-2 rounded-md shadow-md text-gray-200 my-2">{elt.auteur} a partagé avec vous une information</h1>
                            <h1 className="text-xl my-2">{elt.titre}</h1>
                            <p className="text-md my-2">{elt.description}</p>
                        </div>
                    ))
                    }
                    {sondages && sondages.map((elt, i) => (
                        <div key={i} className='py-3 my-3 mx-auto w-4/6 animate__slideInUp animate__animated'>
                            <h1 className="py-3 px-3 text-center mx-auto bg-red-500 text-gray-100 font-bold text-lg rounded-md shadow-md">{elt.auteur} a partagé avec vous un sondage <span className="px-5 text-md bg-black bg-opacity-40 rounded-md mx-2 shadow-md py-1">{elt.votes} personne ont voté</span></h1>
                            <table className="my-1 py-1 px-3 bg-red-400 text-center w-full rounded-md shadow-md text-white font-bold">
                                <thead className="text-xl">
                                    <th className="py-3"></th>
                                    <th className="py-3">8 - 10</th>
                                    <th className="py-3">10 - 12</th>
                                    <th className="py-3">14 - 16</th>
                                    <th className="py-3">16 - 18</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="py-3 text-xl">Lundi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('lundi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'lundi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('lundi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'lundi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('lundi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'lundi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('lundi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'lundi_4_6')}
                                        </td>
                                    </tr>


                                    <tr>
                                        <th className="py-3 text-xl">Mardi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mardi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mardi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mardi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mardi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mardi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mardi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mardi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mardi_4_6')}
                                        </td>
                                    </tr>


                                    <tr>
                                        <th className="py-3 text-xl">Mercredi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mercredi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mercredi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mercredi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mercredi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mercredi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mercredi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('mercredi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'mercredi_4_6')}
                                        </td>
                                    </tr>


                                    <tr>
                                        <th className="py-3 text-xl">Jeudi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('jeudi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'jeudi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('jeudi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'jeudi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('jeudi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'jeudi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('jeudi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'jeudi_4_6')}
                                        </td>
                                    </tr>


                                    <tr>
                                        <th className="py-3 text-xl">Vendredi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('vendredi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'vendredi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('vendredi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'vendredi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('vendredi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'vendredi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('vendredi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'vendredi_4_6')}
                                        </td>
                                    </tr>


                                    <tr>
                                        <th className="py-3 text-xl">Samedi</th>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('samedi_8_10', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'samedi_8_10')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('samedi_10_12', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'samedi_10_12')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('samedi_2_4', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'samedi_2_4')}
                                        </td>
                                        <td className="py-3">
                                            {!elt.participants.includes(user.user_id) &&
                                                <button onClick={e => Choisir('samedi_4_6', e, elt._id, elt.votes)} className="mx-auto py-2 px-3 bg-green-500 rounded-md shadow-md hover:scale-105 transition-all font-bold">Choisir</button>
                                            }
                                            {count(elt.resultats, 'samedi_4_6')}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default Index
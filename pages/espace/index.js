import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import Sidebar from '../../components/sidebar'
import Axios from 'axios'

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()
    console.log(user)

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
                    <h1 className="text-gray-600 font-bold text-xl">Bienvenue Mr/Mme {user.nom_complet} a votre espace peronnel</h1>
                </div>
            </div>
            }
        </div>
    )
}

export default Index
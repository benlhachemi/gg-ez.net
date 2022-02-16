import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"
import HomeIcon from '@mui/icons-material/Home'
import BallotIcon from '@mui/icons-material/Ballot'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Axios from 'axios'

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()

    //functions
    const redirect_sign_in = () => {
        window.location.href = '/connexion'
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

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user && redirect_sign_in()}
            {user.role !== 'admin'}
            {user &&
                <div className="w-full min-h-screen bg-gray-100 flex">
                    <div className="sidebar w-1/6 h-screen bg-gray-700 justify-center shadow-md py-3 text-center px-2">
                        <h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><HomeIcon sx={{fontSize: '20px'}} /> Home</h1>
                        <h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><BallotIcon sx={{fontSize: '20px'}} /> Les demandes d'inscription</h1>
                        <h1 onClick={deconnexion} className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><ExitToAppIcon sx={{fontSize: '20px'}} /> Déconnexion</h1>
                    </div>
                    <div className="content min-h-screen w-full"></div>
                </div>
            }
        </div>
    )
}

export default Index
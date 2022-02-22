//imports
import HomeIcon from '@mui/icons-material/Home'
import BallotIcon from '@mui/icons-material/Ballot'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Axios from 'axios'
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import EmailIcon from '@mui/icons-material/Email'

const Sidebar = ({user}) => {

    //functions
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
        <div className="sidebar w-1/6 min-h-screen bg-gray-700 justify-center shadow-md py-3 text-center px-2">
            <Link href='/espace'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><HomeIcon sx={{fontSize: '20px'}} /> Home</h1></Link>
            
            {user.role === 'admin' &&
                <>
                <br />
                <h1 className='text-white text-sm font-bold'>--Espace admin--</h1>
                <Link href='/espace/demandes-inscription'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><BallotIcon sx={{fontSize: '20px'}} /> Les demandes d&apos;inscription</h1></Link>
                <Link href='/espace/ajouter-information'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouvelle information</h1></Link>
                <Link href='/espace/ajouter-sondage'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouveau sondage</h1></Link>
                <Link href='/espace/supprimer-information'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><ClearIcon sx={{fontSize: '20px'}} /> Supprimer information</h1></Link>
                <Link href='/espace/supprimer-sondage'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><ClearIcon sx={{fontSize: '20px'}} /> Supprimer sondage</h1></Link>
                </>
            }

            {(user.role === 'admin' || user.role === 'ECSAE' || user.role === 'ECAE' || user.role === 'EPCME' || user.role === 'EEMI' || user.role === 'permanent') &&
                <>
                <Link href='/espace/ajouter-publication'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouvelle publication</h1></Link>
                <Link href='/espace/ajouter-communication'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouvelle communication</h1></Link>
                <Link href='/espace/ajouter-these'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouvelle thése</h1></Link>
                <Link href='/espace/ajouter-projet'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouveau projet</h1></Link>
                <Link href='/espace/ajouter-brevet'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouveau brevet</h1></Link>
                <Link href='/espace/ajouter-actualite'><h1 className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><AddIcon sx={{fontSize: '20px'}} /> Nouvelle actualité</h1></Link>
                </>
            }
            <br />
            <br />
            <h1 onClick={deconnexion} className="text-white py-3 px-2 rounded-md shadow cursor-pointer my-3 bg-gray-600 hover:bg-gray-800"><ExitToAppIcon sx={{fontSize: '20px'}} /> Déconnexion</h1>
            <br />
            <br />
            <br />
            <div className='py-3 px-2 mx-2 text-center text-sm bg-gray-800 text-gray-200 rounded-md shadow-md'>En cas d&apos;erreur, observation ou un truc a ajouter sur le site n&apos;hésiter pas me contacter sur :<h1 className='font-bold mt-3'>contact@benlhachemi.com</h1></div>
        </div>
    )
}

export default Sidebar
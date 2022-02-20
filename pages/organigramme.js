//imports
import Header from '../components/header'
import Navbar from '../components/navbar'
import GroupIcon from '@mui/icons-material/Group'

const Organigramme = () => {

    //main render
    return (
        <div>
            <Header />
            <Navbar />
            <div className="w-full py-5 text-center px-5 lg:py-10 lg:px-32 mx-auto bg-amber-300">
                <h1 className="text-center text-2xl lg:text-5xl text-gray-700 font-bold mt-4">Organigramme</h1>
                <p className='text-gray-800 text-md font-semibold mt-10 lg:px-24'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vero doloribus quasi alias voluptate molestiae at ea officia nemo magni. Dicta voluptate molestiae repellendus assumenda accusamus ex necessitatibus nostrum repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit a alias quae aspernatur enim et vero accusantium eius nesciunt veniam earum aliquam id exercitationem temporibus, soluta minima ab adipisci.</p>
                <div className="grid grid-cols-1 lg:grid-cols-5 mt-16 gap-3">
                    <div className="py-3 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <GroupIcon sx={{fontSize: '50px'}} className='mb-3' />
                        <h1 className="text-4xl text-gray-300">300</h1>
                        <h1 className="text-xl text-gray-300">PERSONNES</h1>
                    </div>
                    <div className="py-3 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <GroupIcon sx={{fontSize: '50px'}} className='mb-3' />
                        <h1 className="text-4xl text-gray-300">120</h1>
                        <h1 className="text-xl text-gray-300">ENSEIGNANTS-CHERCHEURS</h1>
                    </div>
                    <div className="py-3 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <GroupIcon sx={{fontSize: '50px'}} className='mb-3' />
                        <h1 className="text-4xl text-gray-300">40</h1>
                        <h1 className="text-xl text-gray-300">PERSONNELS TECHNIQUES ET ADMINISTRATIFS</h1>
                    </div>
                    <div className="py-3 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <GroupIcon sx={{fontSize: '50px'}} className='mb-3' />
                        <h1 className="text-4xl text-gray-300">100</h1>
                        <h1 className="text-xl text-gray-300">DOCTORANTS</h1>
                    </div>
                    <div className="py-3 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <GroupIcon sx={{fontSize: '50px'}} className='mb-3' />
                        <h1 className="text-4xl text-gray-300">20</h1>
                        <h1 className="text-xl text-gray-300">ATER, POSTDOC ET CHERCHEURS INVITÉS</h1>
                    </div>
                </div>   
            </div>

            <div className='w-full py-2 text-center px-5 lg:py-10 lg:px-32 mx-auto bg-blue-300'>
                <h1 className="text-center text-2xl lg:text-5xl text-gray-700 font-bold mt-7">Comité de direction</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-3">
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Directeur Unité</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Directeur-Adjoint</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Directeur délégué des Sites de Toulon</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Directeur administratif et financier</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Assistante de Direction</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Responsable</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                    <div className="py-10 px-3 cursor-pointer hover:scale-105 transition-all text-center rounded-md text-gray-300 shadow-md items-center font-bold bg-black bg-opacity-30">
                        <h1 className="text-2xl text-gray-800">Référente Scientifique</h1><br />
                        <h1 className="text-lg text-gray-300">Souhail Benlhachemi</h1>
                        <h1 className="text-sm text-blue-200">contact@benlhachemi.com</h1>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Organigramme
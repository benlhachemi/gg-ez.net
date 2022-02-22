//imports
import Header from '../components/header'
import Navbar from '../components/navbar'

const StructurationRecherche = () => {

    //main render
    return (
        <div>
            <Header />
            <Navbar />
            <div className="w-full py-5 text-center px-5 lg:py-10 lg:px-10 mx-auto bg-cyan-300">
                <h1 className="text-center text-2xl lg:text-5xl text-gray-700 font-bold mt-4">Structuration de la recherche</h1>
                <p className='text-gray-800 text-md font-semibold mt-12 lg:px-24'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vero doloribus quasi alias voluptate molestiae at ea officia nemo magni. Dicta voluptate molestiae repellendus assumenda accusamus ex necessitatibus nostrum repellat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, non! Sit illo atque doloribus numquam, placeat expedita hic earum quo dolore aut maiores debitis incidunt iste id necessitatibus ut ad?</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 lg:w-3/6 mx-auto text-center">
                    <div className="rounded-md shadow-md py-3 px-3 text-center bg-black bg-opacity-20 hover:scale-105 transition-all cursor-pointer">
                        <h1 className='font-bold text-2xl text-purple-600 mb-4'>ECSAE</h1>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <button className="mx-auto py-3 px-4 bg-green-500 rounded-md shadow-lg font-bold text-gray-100 my-3">Département ECSAE</button>
                    </div>

                    <div className="rounded-md shadow-md py-3 px-3 text-center bg-black bg-opacity-20 hover:scale-105 transition-all cursor-pointer">
                        <h1 className='font-bold text-2xl text-purple-600 mb-4'>ECSAE</h1>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <button className="mx-auto py-3 px-4 bg-green-500 rounded-md shadow-lg font-bold text-gray-100 my-3">Département ECSAE</button>
                    </div> 

                    <div className="rounded-md shadow-md py-3 px-3 text-center bg-black bg-opacity-20 hover:scale-105 transition-all cursor-pointer">
                        <h1 className='font-bold text-2xl text-purple-600 mb-4'>ECSAE</h1>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <button className="mx-auto py-3 px-4 bg-green-500 rounded-md shadow-lg font-bold text-gray-100 my-3">Département ECSAE</button>
                    </div>

                    <div className="rounded-md shadow-md py-3 px-3 text-center bg-black bg-opacity-20 hover:scale-105 transition-all cursor-pointer">
                        <h1 className='font-bold text-2xl text-purple-600 mb-4'>ECSAE</h1>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <p className='text-gray-700 font-bold text-lg my-2'>Nanostructuration (NANO)</p>
                        <button className="mx-auto py-3 px-4 bg-green-500 rounded-md shadow-lg font-bold text-gray-100 my-3">Département ECSAE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StructurationRecherche
//imports
import Header from '../components/header'
import Navbar from '../components/navbar'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

const Actualites = () => {
    //useState HOOKS
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)

    //useEffect HOOKS
    useEffect(() => {
        Axios.get('/api/get-actualites')
        .then(res => {
            setPublications(res.data.actualites)
            setLoading(false)
        })
    }, [])

    //main render
    return (
        <div>
            <Header />
            <Navbar />
            <div className="w-full text-center">
                <h1 className="text-center text-2xl lg:text-5xl text-gray-100 py-16 font-bold bg-blue-400 mb-10">Actualités</h1>
                <div className='grid grid-cols-3 gap-3 mx-auto w-5/6'>
                    {loading ? <CircularProgress className='mx-auto'/> : publications.length > 0 &&
                        publications.map((elt, i) => (
                            <div key={i} className='bg-gray-300 rounded-md shadow-md text-center font-bold text-gray-700 py-5 px-6'>
                                <h1 className='text-2xl mb-5'>{elt.titre}</h1>
                                <p>{elt.description}</p>
                                {elt.lien && <button onClick={e => window.location.href = `${elt.lien}`} className='mx-auto rounded-md shadow-md mt-5 hover:scale-105 transition-all py-2 px-5 text-center font-bold text-gray-100 bg-green-500'>En savoir plus</button>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Actualites
//imports
import Header from '../components/header'
import Navbar from '../components/navbar'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

const Communications = () => {
    //useState HOOKS
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)

    //useEffect HOOKS
    useEffect(() => {
        Axios.get('/api/get-communications')
        .then(res => {
            setPublications(res.data.communications)
            setLoading(false)
        })
    }, [])

    //main render
    return (
        <div>
            <Header />
            <Navbar />
            <div className="w-full text-center">
                <h1 className="text-center text-2xl lg:text-5xl text-gray-100 py-16 font-bold bg-blue-400 mb-10">Communications</h1>
                {loading ? <CircularProgress className='mx-auto'/> : publications.length > 0 &&
                    publications.map((elt, i) => (
                        <table key={i} className='w-3/6 text-center mx-auto py-4 px-4 my-10 border-collapse border-gray-700 rounded-lg shadow-md bg-gray-200'>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Auteur</th>
                                <td className='py-3 border-gray-300 border-b'>{elt.auteur}</td>
                            </tr>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Titre</th>
                                <td className='py-3 border-gray-300 border-b'>{elt.titre}</td>
                            </tr>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Lieu</th>
                                <td className='py-3 border-gray-300 border-b'>{elt.lieu}</td>
                            </tr>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Références</th>
                                <td className='py-3 border-gray-300 border-b'>{elt.reference}</td>
                            </tr>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Date</th>
                                <td className='py-3 border-gray-300 border-b'>{elt.date}</td>
                            </tr>
                            <tr>
                                <th className='py-3 border-r border-gray-300 border-b'>Lien</th>
                                <td className='py-3 border-gray-300 border-b'><a className='text-blue-500 ' href={elt.lien}>{elt.lien}</a></td>
                            </tr>
                        </table>
                    ))
                }
            </div>
        </div>
    )
}

export default Communications
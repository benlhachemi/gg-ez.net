//imports
import { useState, useEffect } from "react"
import Axios from "axios"

const useAuth = () => {
    //useState HOOKS
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)
    const [session_id, setSessionId] = useState()

    //functions
    const check_auth = async() => {
        Axios({
            method: 'POST',
            url: '/api/check-auth',
            data: {
                session_id: session_id
            }
        }).then(res => {
            if(!res.data.error) setUser(res.data.session)
            setLoading(false)
        })
    }

    //useEffect HOOKS
    useEffect(() => {
        if(!window.localStorage.getItem('session_id')) setLoading(false)
        setSessionId(window.localStorage.getItem('session_id'))
    }, [])

    useEffect(() => {
        if(session_id) check_auth()
    }, [session_id])

    //main return 
    return [user, loading]
}

export default useAuth
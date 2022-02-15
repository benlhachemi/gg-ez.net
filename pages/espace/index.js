import useAuth from "../../hooks/useAuth"
import Loader from "../../components/loader"

const Index = () => {
    //useAuth HOOK
    const [user, loading] = useAuth()

    //functions
    const redirect_sign_in = () => {
        window.location.href = '/connexion'
    }

    //main render
    return (
        <div>
            {loading ? <Loader /> : !user && redirect_sign_in()}
            {user &&
                <div>
                    welcome to espace
                </div>
            }
        </div>
    )
}

export default Index
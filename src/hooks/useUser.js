import userContext from "context/UserContext";
import { useContext,useState, useCallback } from "react";
import addFav from "services/addFav";
import loginService from "services/login";

export default function useUser() {
    const {favs, setFavs, jwt, setJWT } = useContext(userContext)
    const [state, setState] = useState({
        loading:false,
        error: false
    })

    const login = useCallback(({ username, password }) => {
        setState({loading: true, error: false})
        loginService({ username, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt',jwt)
                setState({loading: false, error: false})
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setState({loading: false, error: true})
                console.log(err);
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    const fav = useCallback(({ id }) => {
        addFav({id, jwt})
            .then(favs => setFavs(favs))
            .catch(err => {
                console.log(err)
            })
    }, [jwt, setFavs])

    return {
        fav,
        favs,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}

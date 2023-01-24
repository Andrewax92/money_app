import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {

            await signOut(auth)

            // dispatch logout action
            dispatch({ type: "LOGOUT" })

            // update state 
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }




        } catch (error) {
            if (!isCancelled) {
                console.log(error);
                setError(error.message)
                setIsPending(false)
            }

        }
    }

    useEffect(() => {

        return () => setIsCancelled(true)


    }, [])
    return { error, logout, isPending }
}
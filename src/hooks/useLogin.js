
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {

            const res = await signInWithEmailAndPassword(auth, email, password)



            // dispatch logout action
            dispatch({ type: "LOGIN", payload: res.user })

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
    return { error, login, isPending }
}
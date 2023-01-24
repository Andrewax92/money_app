import { useState, useEffect } from "react"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";



export const useSignup = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {

        setError(null)
        setIsPending(true)

        try {

            const response = await createUserWithEmailAndPassword(auth, email, password)

            console.log("Response is", response);
            // dispatch login action

            dispatch({ type: 'LOGIN', payload: response.user })

            if (!response) {

                throw new Error("Could not complete signUp")
            }
            // add display name
            await updateProfile(auth.currentUser, { displayName })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (error) {

            if (!isCancelled) {
                console.log(error);
                setIsPending(false)
                setError(null)
            }

        }

    }
    useEffect(() => {

        return () => setIsCancelled(true)


    }, [])
    return { error, isPending, signup }
}
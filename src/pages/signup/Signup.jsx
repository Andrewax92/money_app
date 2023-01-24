import { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'
import { useNavigate} from 'react-router'
const Signup = () => {

    const[email,setEmail]= useState('')
    const[password,setPassword] = useState('')
    const[displayName,setDisplayName] = useState('')
    const navigate = useNavigate()
    
    const {signup,error,isPending} = useSignup()

    const handleSubmit = async(e) => {
      e.preventDefault()
       
      await signup(email,password,displayName);
      
      // if(!error){
      //   navigate('/')
      // }
    }
 return (
   <form onSubmit={handleSubmit} className={styles['signup-form']}>

     <h2>Login</h2>

     <label >
       <span>display name:</span>
       <input type="text" 
        onChange = {(e) => setDisplayName(e.target.value)} 
        value={displayName}/>
     </label>


     <label >
       <span>email:</span>
       <input type="text" 
        onChange = {(e) => setEmail(e.target.value)} 
        value={email}/>
     </label>

     <label >
       <span>password:</span>
       <input type="current-password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}/>
     </label>

    { !isPending && <button className="btn">Signup</button> } 
     {isPending && <button className='btn' disabled>Loading</button>} 
     {error && <p>{error}</p>}

   </form>
 )
}
export default Signup
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import styles from './Navbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  
  const{user} = useAuthContext()
  const{logout} = useLogout()
  console.log("Navbar" , user);
  return (
     <nav className={styles.navbar}>
         <ul>
             <li className={styles.title}>moneyAPP</li>

          {!user && (
            <>
            <li> <Link to="/login">Login</Link></li>
            <li> <Link to="/signup">Signup</Link></li>
           </>  
          )} 

          {user &&(
          <>
             <li>hello,{user.displayName}</li>
             <li>
             <button className='btn' onClick={logout}>Logout</button>
             </li>
           </>
          )}
          
      
         </ul>
     </nav>
  )
}
export default Navbar
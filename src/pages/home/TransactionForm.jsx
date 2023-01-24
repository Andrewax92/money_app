import { useEffect, useState } from "react"
import { useFireStore } from "../../hooks/useFireStore"
const TransactionForm = ({uid}) => {

    const[name,setName] = useState('')
    const[amount,setAmount] = useState('')

    const {addDocument,state} = useFireStore('transactions')

   const handleSubmit = async(e) => {
         e.preventDefault()
   console.log(uid,name,amount);
     await addDocument({
        uid,
        name,
        amount
    })
    }

 useEffect(() => {
     if(state.success){
         setName('')
         setAmount('')
     }
 },[state.success])

  return (
     <>
     <h3>Add a Transaction</h3>

     <form onSubmit={handleSubmit} >
         <label>
             <span>Transaction name : </span>
             <input type="text" 
             required
             onChange = {(e) => setName(e.target.value)}
             value={name}/>
         </label>
         <label>
             <span>Amount ($): </span>
             <input type="number" 
             required
             onChange = {(e) => setAmount(e.target.value)}
             value={amount}/>
         </label>
         <button >Add transaction</button>
     </form>

     </>
  )
}

export default TransactionForm

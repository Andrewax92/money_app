
import styles from './Home.module.css'

import { useFireStore } from '../../hooks/useFireStore'

export const TransactionList = ({transactions}) => {

  const {deleteDocument,state} = useFireStore('transactions')
  console.log(state);
  return (
      <ul className={styles.transactions}>
       {transactions.map((transaction) => (

           <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>${transaction.amount}</p>
                <button onClick ={() => deleteDocument(transaction.id) }>x</button>
           </li>
       ))}

      </ul>
  )
}
import transactions from "./transactions.json"
import { TransactionsItem } from "./TransactionsItem.jsx"
import styleTrans from "./Transactions.module.css"



export const Transactions = () => {
    return (
        <table className={styleTrans.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
       
  <tbody>
       {transactions.map(el => {
            return <TransactionsItem
            type = {el.type}
            amount = {el.amount}
            currency = {el.currency}
            key = {el.id}
            />
        })}
  </tbody>
</table>
    )
}

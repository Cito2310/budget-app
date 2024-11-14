import { TableTransactions } from "../components/TableTransactions"

export const TransactionsPage = () => {
  return (
    <div className="flex-1 mx-8 my-4">
        <h1 className="font-Montserrat text-2xl font-medium mb-2">MIS TRANSACCIONES</h1>
        <TableTransactions />
        <button className="absolute right-8 bottom-8 bg-[#4333A0] text-[#4333A0] aspect-square w-12 rounded-full">
            <i className="fa-solid fa-plus brightness-[5] text-2xl"></i>
        </button>
    </div>
  )
}
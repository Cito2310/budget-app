import { Sidebar } from "./components/Sidebar"
import { BudgetPlannerPage } from "./pages/BudgetPlannerPage"
import { TransactionsPage } from "./pages/TransactionsPage"

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <BudgetPlannerPage />
      {/* <TransactionsPage /> */}
    </div>
  )
}

export default App
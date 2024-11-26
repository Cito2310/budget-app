import { Sidebar } from "./components/Sidebar"
import { BudgetPlannerPage } from "./pages/BudgetPlannerPage"
import { DashboardPage } from "./pages/DashboardPage"
import { TransactionsPage } from "./pages/TransactionsPage"

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <DashboardPage />
      {/* <BudgetPlannerPage /> */}
      {/* <TransactionsPage /> */}
    </div>
  )
}

export default App
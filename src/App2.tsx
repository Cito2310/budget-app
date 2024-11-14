import { Sidebar } from "./components/Sidebar"
import { TransactionsPage } from "./pages/TransactionsPage"

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <TransactionsPage />
    </div>
  )
}

export default App
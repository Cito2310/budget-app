import { Sidebar } from "./components/Sidebar"
import { AppRoute } from "./routes/AppRoute"

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <AppRoute/>
    </div>
  )
}

export default App
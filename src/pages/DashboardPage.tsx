import { AvailableSpend } from "../components/dashboard/AvailableSpend"
import { CalendarHeat } from "../components/dashboard/CalendarHeat"
import { PieCharts } from "../components/dashboard/Piecharts"
import { RecentTransactions } from "../components/dashboard/RecentTransactions"

export const DashboardPage = () => {
  return (
    <div className="flex-1 mx-8 my-4">
        <h1 className="font-Montserrat text-2xl font-medium mb-2">PANEL PRINCIPAL</h1>

        <div className="flex gap-6">
            {/* COLUMNA 1 - Transacciones Recientes | PieCharts */}
            <div className="flex-col flex gap-6 w-[60%]">
                <RecentTransactions/>

                <PieCharts/>
            </div>

            {/* COLUMNA 2 - Disponible a gastar | Mapa de gastos por dia  */}
            <div className="flex-col flex gap-6 w-[40%]">
                <AvailableSpend />

                <CalendarHeat/>
            </div>
        </div>


    </div>
  )
}
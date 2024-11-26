import { AvailableSpend } from "../components/dashboard/AvailableSpend"
import { CalendarHeat } from "../components/dashboard/CalendarHeat"
import { RecentTransactions } from "../components/dashboard/RecentTransactions"
import { ProgressBar } from "../components/ProgressBar"

export const DashboardPage = () => {
  return (
    <div className="flex-1 mx-8 my-4">
        <h1 className="font-Montserrat text-2xl font-medium mb-2">PANEL PRINCIPAL</h1>

        <div className="flex gap-6">
            {/* COLUMNA 1 - Transacciones Recientes | PieCharts */}
            <div className="flex-col flex gap-6 w-[60%]">
                <RecentTransactions/>

                <div className={`rounded-md border border-[#cfcfcf] shadow-lg px-6 py-3 table-fixed text-[#444]`}>
                    <h2 className="font-medium text-center">Disponible a Gastar</h2>
                    <span className="flex">
                        <h3 className="font-semibold text-center">$400.000</h3>
                        <p className="font-semibold text-center">de $420.000</p>
                    </span>
                    <h2 className="font-semibold text-center">$400.000</h2>
                </div>
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
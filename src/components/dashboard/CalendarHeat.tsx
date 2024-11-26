import { useMemo } from "react"
import { ContainerDashboard } from "./ContainerDashboard"
import { generateCalendarData } from "../../helpers/generateCalendarData";

export const CalendarHeat = () => {
    const calendar = useMemo(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        const calendar = generateCalendarData(year, month);
        return calendar;
    }, [])

    return (
        <ContainerDashboard>
            <h2 className="font-semibold text-black font-Montserrat text-xl mb-2">Gastos en el Mes</h2>

            <div className="flex flex-col gap-2">
                { calendar.map( week => 
                    <div className="flex gap-2">
                        {week.map( dayData =>
                            <div className={`w-full aspect-[3/2] bg-green-500 rounded-sm ${!dayData && "bg-transparent"}`}></div>
                        )}
                    </div>
                )}
            </div>
        </ContainerDashboard>
    )
}
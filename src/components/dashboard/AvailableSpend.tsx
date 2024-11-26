import { ProgressBar } from "../ProgressBar"
import { ContainerDashboard } from "./ContainerDashboard"

export const AvailableSpend = () => {
  return (
    <ContainerDashboard>
        <h2 className="font-semibold text-black font-Montserrat text-xl mb-2">Disponible para Gastar</h2>
        <span className="flex items-end gap-2">
        <h3 className="font-bold text-3xl">$400.000</h3>
        <p className=" text-[#8b9199]">de $420.000</p>
        </span>
        <ProgressBar progress={50} />
    </ContainerDashboard>
  )
}
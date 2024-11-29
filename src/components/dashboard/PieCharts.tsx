import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ContainerDashboard } from "./ContainerDashboard"


const data1 = [
    { name: 'Gastos Basicos', value: 54 },
    { name: 'Gastos Extras', value: 30 },
    { name: 'Ahorros e Inversiones', value: 12 },
    { name: 'Deudas', value: 4 },
  ];
  const data2 = [
    { name: 'Presupuestado', value: 92 },
    { name: 'Sin Asignar', value: 8 },
  ];

const ContainerChart = ({title, data, className}: {title:string, data: any[], className?: string}) => {
    return <div className={`${className} w-full`}>
        <ResponsiveContainer width="100%" height={180}>
            <PieChart className="">
                <Pie dataKey="value" data={data} innerRadius={"30%"} outerRadius="100%" fill="#82ca9d" />
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        <h2 className="text-center">{title}</h2>
    </div>
}

export const PieCharts = () => {
  return (
    <ContainerDashboard>
        <h2 className="font-semibold text-black font-Montserrat text-xl mb-2">Disponible para Gastar</h2>

        <div className="flex gap-2">
            <ContainerChart
                data={data1}
                title="Presupuesto Basico"
                className=""
            />
            <ContainerChart
                data={data2}
                title="Presupuesto Basico"
                className=""
            />
            <ContainerChart
                data={data1}
                title="Presupuesto Basico"
                className=""
            /> 
        </div>
    </ContainerDashboard>
  )
}
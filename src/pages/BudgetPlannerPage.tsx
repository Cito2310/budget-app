import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { TableBudget } from "../components/TableBudget";
import { SidebarPieBudget } from "../components/SidebarPieBudget";

const data01 = [
  { name: 'Gastos Basicos', value: 54 },
  { name: 'Gastos Extras', value: 30 },
  { name: 'Ahorros e Inversiones', value: 12 },
  { name: 'Deudas', value: 4 },
];
const data02 = [
  { name: 'Presupuestado', value: 92 },
  { name: 'Sin Asignar', value: 8 },
];


export const BudgetPlannerPage = () => {
  return (
    <div className="flex flex-1">
      <div className="mx-8 my-4 flex-grow">
        <h1 className="font-Montserrat text-2xl font-medium mb-2">PRESUPUESTO</h1>

        <div className="flex flex-col gap-3">
        <span className="flex w-full gap-3">
            <TableBudget
              className="w-full"
              title="GASTOS BASICOS"
              header={["Concepto", "Estimado", "Disponible"]}
              footer={["TOTAL", "$120.000", "$54.000"]}
              data={[
                ["Mercado", "$30.000", "$0"],
                ["Internet", "$12.000", "$0"],
                ["Seguro", "$32.000", "$0"],
                ["Renta", "$120.000", "$0"]
              ]}
            />
            <TableBudget
              className="w-full"
              title="GASTOS EXTRAS"
              header={["Concepto", "Estimado", "Disponible"]}
              footer={["TOTAL", "$120.000", "$54.000"]}
              data={[
                ["Videojuegos", "$30.000", "$0"],
                ["Salidas", "$12.000", "$0"],
                ["Rappi", "$32.000", "$0"],
              ]}
            />
        </span>
        <span className="flex w-full gap-3">
            <TableBudget
              className="w-full"
              title="AHORROS E INVERSIONES"
              header={["Concepto", "Estimado", "Disponible"]}
              footer={["TOTAL", "$120.000", "$54.000"]}
              data={[
                ["Ahorro", "$10.000", "-"],
                ["Criptomonedas", "$12.000", "$4.000"],
              ]}
            />
            <TableBudget
              className="w-full"
              title="Deudas"
              header={["Concepto", "Estimado"]}
              footer={["TOTAL", "$120.000", ]}
              data={[
                ["Tarjetas", "$10.000"],
              ]}
            />
        </span>

        </div>
      </div>
      <SidebarPieBudget data1={data01} data2={data02} />
      <button className="absolute right-8 bottom-8 bg-[#4333A0] text-[#4333A0] aspect-square w-12 rounded-full">
            <i className="fa-solid fa-pen brightness-[5] text-xl"></i>
        </button>
      </div>
  )
}
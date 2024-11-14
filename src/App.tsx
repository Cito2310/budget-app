import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { TableBudget } from "./components/TableBudget"
import { TableGeneral } from "./components/TableGeneral"
import { TableIncome } from "./components/TableIncome"
import { AppRoute } from "./routes/AppRoute"

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group F', value: 189 },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function App() {
  return (
    <div className="App m-6 flex flex-col gap-3">
      {/* HEADER */}
      <div className="flex flex-col">
      <h1 className="font-Montserrat font-bold text-4xl">NOVIEMBRE</h1>
      <h2 className="font-Montserrat font-medium text-xl">META ACTUAL: Comprar Rtx 3070</h2>
      </div>

      <div className="flex gap-3 w-full">
        <div className="w-[30%]">
          <TableIncome />

          <TableGeneral />

          <ResponsiveContainer width="99%" height={300} className="bg-red-600">
            <PieChart>
              <Pie
                data={data01}
                labelLine={false}
                label={renderCustomizedLabel}
                cx="50%"
                cy="50%"
                outerRadius="90%"
                innerRadius="30%"
                fill="#8884d8"
                dataKey="value"
              >
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* <PieChart width={400} height={400}> */}
              {/* <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                // cx={200}
                // cy={200}
                outerRadius="50%"
                fill="#8884d8"
                label
                labelLine={false}
              /> */}
            {/* </PieChart> */}
        </div>
        <div className="bg-green-700 w-full">Hola</div>
      </div>
{/* 
      <div className="flex w-full gap-3">
        <TableBudget
          title="GASTOS BASICOS"
          headers={["Conceptos", "Asignado", "Gastado - Disponible"]}
          data={[
            ["Mercado", "100000", "60000 - 40000"],
            ["Luz", "13220", "13220 - 0"],
            ["Internet", "23300", "23300 - 0"],
          ]}
          footer={["TOTAL", "1240000", "504000 - 130000"]}
        />

        <TableBudget
          title="GASTOS EXTRAS"
          headers={["Conceptos", "Asignado", "Gastado - Disponible"]}
          data={[
            ["Videojuegos", "50000", "34000 - 16000"],
            ["Salidas", "10000", "0 - 10000"],
          ]}
          footer={["TOTAL", "999999", "504000 - 130000"]}
        />
      </div> */}
{/* 
        <TableBudget
          title="AHORROS E INVERSIONES"
          headers={["Conceptos", "Asignado", "Disponible"]}
          data={[
            ["Ahorros Generales", "20000", "-"],
            ["Inversiones en Criptomonedas", "30000", "10000"],
          ]}
          footer={["TOTAL", "50000", "10000"]}
        />

        <TableBudget 
          title="DEUDAS"
          headers={["Conceptos", "Estimado", "Actual"]}
          data={[
            ["Tarjetas", "20000", "20000"],
          ]}
          footer={["TOTAL", "20000", "20000"]}
        /> */}

      </div>
  )
}

export default App
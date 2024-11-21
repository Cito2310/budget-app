import { Pie, PieChart, Tooltip } from 'recharts';

interface props {
    data1: any;
    data2: any;
    width: number
}

export const SidebarPieBudget = ({ data1, data2, width }: props) => (
  <>
    <div className={`py-4 pr-8 h-screen flex-col flex gap-3 fixed right-0`}>
      <div>
        <h2 className="text-center">PRESUPUESTO</h2>
        <PieChart width={width} height={200} className="">
          <Pie dataKey="value" data={data1} innerRadius={"30%"} outerRadius="70%" fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </div>

      <div>
        <h2 className="text-center">DISPONIBLE PARA GASTAR</h2>
        <PieChart width={width} height={200} className="">
          <Pie dataKey="value" data={data2} innerRadius={"30%"} outerRadius="70%" fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
    <div className={`w-[${width}px]`}></div>
  </>
)
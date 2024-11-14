export const TableIncome = () => {
  return (
    <div className="flex flex-col">

        <div className="w-full border border-black border-b-0 flex justify-between px-2">
          <h2 className="
            font-Montserrat font-semibold text-xl
            ml-2">
              Mis Ingresos</h2>
          <button className="
            font-Montserrat text-center font-semibold text-xl 
            aspect-square h-7
            ">
              <i className="fa-solid fa-plus"/>
            </button>
        </div>

        <table>
          <thead><tr>
            <th className="table-cell font-medium">Concepto</th>
            <th className="table-cell font-medium">Estimado</th>
          </tr></thead>

          <tbody>
            <tr>
              <td className="table-cell">Salario</td>
              <td className="table-cell">$ 400.000</td>
            </tr>
            <tr>
              <td className="table-cell">Independiente</td>
              <td className="table-cell">$ 20.000</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className="table-cell font-semibold">TOTAL</td>  
              <td className="table-cell font-medium">$ 420.000</td>  
            </tr>
          </tfoot>
        </table>

        </div>
  )
}
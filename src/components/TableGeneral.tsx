export const TableGeneral = () => {
  return (
    <table className="table-fixed">
          <thead><tr>
            <th className="table-cell font-medium">Ingresos Totales</th>
            <th className="table-cell font-medium">Aporte para Deuda</th>
            <th className="table-cell font-medium">Disponible para Presupuesto</th>
          </tr></thead>

          <tbody>
            <tr>
              <td className="table-cell text-center">$ 420.000</td>
              <td className="table-cell text-center">$ 20.000</td>
              <td className="table-cell text-center">$ 400.000</td>
            </tr>
          </tbody>
          <thead><tr>
            <th className="table-cell font-medium">Sin Asignar</th>
            <th className="table-cell font-medium">Disponible</th>
            <th className="table-cell font-medium">Actualmente gastado</th>
          </tr></thead>

          <tbody>
            <tr>
              <td className="table-cell text-center">$ 30.000</td>
              <td className="table-cell text-center">$ 120.000</td>
              <td className="table-cell text-center">$ 270.000</td>
            </tr>
          </tbody>
        </table>
  )
}

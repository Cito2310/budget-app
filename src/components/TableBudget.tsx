interface props {
    title: string;
    headers: string[];
    data: string[][];
    footer: string[];
}

export const TableBudget = ({ data, headers, title, footer }: props) => {
    return (
        <div className="w-full">
            <div className="relative flex border border-black border-b-0 w-full justify-center">
                <h3 className="text-center font-semibold text-lg justify-self-center">{title}</h3>
                <button className="h-full px-2 absolute right-0"><i className="fa-solid fa-pen"/></button>
            </div>
            <table className="w-full">
                <thead><tr>
                    {headers.map( str => <th className="table-cell font-medium">{str}</th> )}
                </tr></thead>

                <tbody>
                    { data.map( item => <tr>{item.map(str => <td className="table-cell text-center">{str}</td>)}</tr> ) }
                </tbody>

                <tfoot><tr>
                    {footer.map( str => <td className="table-cell text-center font-semibold">{str}</td> )}    
                </tr></tfoot>
            </table>
        </div>
    )
}
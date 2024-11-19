interface props {
    header: string[];
    footer: string[];
    data: string[][];
    title: string;
    className?: string;
}

const styleHeadCell = (index: number, lengthParent: number) => `font-normal text-[#8b9199] ${index === lengthParent-1 ? "text-right" : "text-left" }`
const styleBodyCell = (index: number, lengthParent: number) => `font-normal ${index === lengthParent-1 ? "text-right" : "text-left" }`
const styleFootCell = (index: number, lengthParent: number) => `font-medium ${index === lengthParent-1 ? "text-right" : "text-left" }`

export const TableBudget = ({ data, footer, header, title, className }:props) => {
    return (
        <div className={`rounded-md border border-[#cfcfcf] shadow-lg px-6 py-3 table-fixed text-[#444] ${className}`}>
            <h2 className="font-semibold text-center">{title}</h2>
            <table className="w-full">
                <thead><tr>{header.map((str, index)=><th className={styleHeadCell(index, header.length)}>{str}</th>)}</tr></thead>

                <tbody>
                    {data.map( line => <tr>{line.map((str, index)=><td className={styleBodyCell(index, header.length)}>{str}</td>)}</tr> )}
                </tbody>

                <tfoot><tr>{footer.map((str, index)=><td className={styleFootCell(index, header.length)}>{str}</td>)}</tr></tfoot>
            </table>
        </div>
    )
}
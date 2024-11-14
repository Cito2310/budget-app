interface propsChildren {
    children?: JSX.Element | (JSX.Element|string)[] | string;
    className?: string;
}

interface propsLine {
    data: {
        name: string;
        account: string;
        date: string;
        amount: string;
        category: string;
    };
}

export const TranstactionsTh = ({children, className}:propsChildren) => (
    <th className={`text-[#8b9199] font-normal text-left ${className}`}>
        {children}
    </th>
)

export const TranstactionCell = ({children, className}:propsChildren) =>
    <td className={`text-[#444] font-normal border-collapse border-y-[1em] border-transparent ${className}`}>{children}</td>

export const TransactionsLine = ({data}:propsLine) => (
    <tr>
        <TranstactionCell>
            <div>
                <p>{data.name}</p>
                <p className="text-[#8b9199]">{data.category}</p>
            </div>
        </TranstactionCell>
        <TranstactionCell>{data.account}</TranstactionCell>
        <TranstactionCell>{data.date}</TranstactionCell>
        <TranstactionCell className="text-right">{data.amount}</TranstactionCell>
    </tr>
)


export const TableTransactions = () => {
    return (
        <table className="table-fixed w-full">
            <thead><tr>
                <TranstactionsTh>Name</TranstactionsTh>
                <TranstactionsTh>Account</TranstactionsTh>
                <TranstactionsTh>Date</TranstactionsTh>
                <TranstactionsTh className="text-right">Amount</TranstactionsTh>
            </tr></thead>
            
            <tbody>
                <TransactionsLine data={{
                    account:"Platinum",
                    amount: "+ $1.240.41",
                    category: "Income",
                    date: "08 Aug 2023 5:02 AM",
                    name: "Paypal"
                }}/>
                <TransactionsLine data={{
                    account:"Regular",
                    amount: "- $15,49",
                    category: "Entertainment",
                    date: "08 Aug 2023 2:16 PM",
                    name: "Netflix"
                }}/>
                <TransactionsLine data={{
                    account:"Platinum",
                    amount: "- $9,72",
                    category: "Education",
                    date: "07 Aug 2023 6:01 PM",
                    name: "Notion"
                }}/>
            </tbody>

            <tfoot><tr></tr></tfoot>
        </table>
    )
}
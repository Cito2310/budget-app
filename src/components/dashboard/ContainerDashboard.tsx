interface props {
    children: any;
}

export const ContainerDashboard = ({children}: props) =>                 
    <div className={`rounded-md border border-[#cfcfcf] shadow-lg px-6 py-3 text-[#444]`}>
        {children}
    </div>
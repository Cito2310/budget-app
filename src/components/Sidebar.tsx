import { NavLink } from "react-router-dom";

interface propsButtonSidebar {
    children: JSX.Element | (JSX.Element | string)[] | string;
    active?: boolean;
    route: string;
}

export const ButtonSidebar = ({ children, active, route }: propsButtonSidebar) => (
    <NavLink to={route} 
    style={({ isActive }) => ({
        filter: isActive ? "brightness(5)" : "brightness(3)",
      })}
    className={`
        text-[#4333A0]
        text-left px-8 py-2
        flex gap-3 items-center
    `}>
        {children}
    </NavLink>
)

export const ContainerDataSidebar = () => (
    <div className="w-full px-7 pt-6">
        <div className="bg-[#5042A8] rounded-xl h-32 text-[#4333A0] flex flex-col justify-center shadow">
            <h2 className="brightness-[5] font-Montserrat text-center font-bold text-3xl">$420.000</h2>
            <h4 className="brightness-[5] font-Montserrat text-center font-medium">Mis Ingresos</h4>
        </div>
    </div>
)

export const Sidebar = () => {
  return (
    <>
        <div className="w-[250px] h-screen flex flex-col gap-3 bg-[#4333A0] fixed">
            <ContainerDataSidebar/>

            <div>
                <ButtonSidebar route="/"><i className="fa-solid fa-table w-[1.2em]"></i>Dashboard</ButtonSidebar>
                <ButtonSidebar route="/transactions"><i className="fa-solid fa-arrow-right-arrow-left w-[1.2em]"></i>Transaction</ButtonSidebar>
                <ButtonSidebar route="/budgetPlanner"><i className="fa-solid fa-chart-pie w-[1.2em]"></i>Budget</ButtonSidebar>
                <ButtonSidebar route="/settings"><i className="fa-solid fa-gear w-[1.2em]"></i>Settings</ButtonSidebar>
                <ButtonSidebar route="/historial"><i className="fa-regular fa-clock w-[1.2em]"></i>Historial</ButtonSidebar>
            </div>
        </div>
        <div className="w-[250px]"></div>
    </>
  )
}

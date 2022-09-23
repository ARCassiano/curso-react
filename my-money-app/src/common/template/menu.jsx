import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

const Menu = (props) => {
    return (
        <>
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <MenuItem path="/" label="Dashboard" icon="dashboard" />
                    <MenuItem path="/dashboard2" label="Dashboard 2" icon="dashboard" />
                    <MenuTree label="Cadastro" icon="edit">
                        <MenuItem path="/billingCycles" label="Ciclos de Pagamentos" icon="usd" />
                    </MenuTree>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
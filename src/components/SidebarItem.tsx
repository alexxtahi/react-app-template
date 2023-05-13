import { Link } from "react-router-dom";

export default function SidebarItem(props: any) {
    // Methods
    const activeOnClick = (event: any): void => {
        // Deactivate all items
        const items = document.getElementsByClassName("menu-item active");
        for (var i = 0; i < items.length; i++)
            items.item(i)!.className = "menu-item";
        // Active only the item who was clicked
        const clickedItem = event.currentTarget;
        clickedItem.className = "menu-item active";
    }
    const activeOnReload = (): string => {
        if (window.location.pathname === props.path) return "menu-item active";
        return "menu-item";
    }
    // Component rendering
    return (
        <li id="sidebar-item" className={activeOnReload()} onClick={activeOnClick}>
            <Link to={props.path} className="menu-link">
                <i className={"menu-icon tf-icons bx " + props.icon}></i>
                <div>{props.name}</div>
            </Link>
        </li>
    );
}
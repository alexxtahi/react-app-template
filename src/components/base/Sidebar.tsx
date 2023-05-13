import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem";

export default function Sidebar(): JSX.Element {
  // Component rendering
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to={"/"} className="app-brand-link">
          <span className="app-brand-logo demo">
            <img src={process.env.PUBLIC_URL + "/assets/img/favicon/mrketplace-rounded-logo.png"} className="sidebar-logo" />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">MRKETPLACE</span>
        </Link>

        <a className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* <!-- Main section --> */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Board</span>
        </li>
        <SidebarItem path="/" icon="bx-bar-chart-alt-2" name="Tableau de bord" />
        <SidebarItem path="/calendar" icon="bx-calendar" name="Planning" />
      </ul>
    </aside>
  );
}
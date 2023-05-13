import { useState } from "react";
import { Link } from "react-router-dom";
import * as bootstrap from "bootstrap";

export default function Header(): JSX.Element {
    // Properties
    const toggleUserDropdown = () => {
        const userDropdown = document.getElementById("userDropdown") as HTMLElement;
        if (userDropdown.classList.contains('show'))
            new bootstrap.Dropdown(userDropdown).hide();
        else
            new bootstrap.Dropdown(userDropdown).show();
    }
    // Component rendering
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4">
                    <i className="bx bx-menu bx-sm"></i>
                </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Rechercher..."
                            aria-label="Rechercher..."
                        />
                    </div>
                </div>
                {/* <!-- /Search --> */}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* <!-- Place this tag where you want the button to render. --> */}
                    <li className="nav-item lh-1 me-3">
                        <span className="fw-bold">
                            Alexandre TAHI
                        </span>
                    </li>

                    {/* <!-- User --> */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a
                            id="userDropdownBtn"
                            className="nav-link dropdown-toggle hide-arrow"
                            onClick={toggleUserDropdown}
                        // data-bs-toggle="dropdown"
                        // data-bs-target="#userDropdown"
                        >
                            <div className="avatar avatar-online">
                                <img src={process.env.PUBLIC_URL + '/assets/img/avatars/m.png'} alt="" className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" id="userDropdown">
                            <li>
                                <div className="dropdown-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/avatars/m.png'} alt="" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="fw-semibold d-block">Alexandre TAHI</span>
                                            <small className="text-muted">Vendeur</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown-divider"></div>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/profile" onClick={toggleUserDropdown}>
                                    <i className="bx bx-user me-2"></i>
                                    <span className="align-middle">Mon Profil</span>
                                </Link>
                            </li>
                            {/*
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-cog me-2"></i>
                                    <span className="align-middle">Paramètres</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="d-flex align-items-center align-middle">
                                        <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                        <span className="flex-grow-1 align-middle">Abonnements</span>
                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                    </span>
                                </a>
                            </li> */}
                            <li>
                                <div className="dropdown-divider"></div>
                            </li>
                            {/* Logout btn */}
                            <li>
                                <button className="dropdown-item">
                                    <i className="bx bx-power-off me-2 text-danger"></i>
                                    <span className="align-middle text-danger">Se déconnecter</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* <!--/ User --> */}
                </ul>
            </div>
        </nav>
    );
}

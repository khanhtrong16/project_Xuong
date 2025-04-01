import React from "react";

import { Link, Outlet } from "react-router-dom";
import "./css.css";

const ClientLayout = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.imgur.com/InENlPK.jpeg" alt="Furniro Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto d-flex gap-3">
                            <li className="nav-item">
                                <Link className="nav-link " to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/shop"}>
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/productdetail"}>
                                    Page
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-icons">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-search" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>
                                    <i className="fas fa-user" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cart"}>
                                    <i className="fas fa-shopping-cart" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section>
                <Outlet />
            </section>
            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Furniro.</h5>
                            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Help</h5>
                            <ul>
                                <li>
                                    <a href="#">Payment Options</a>
                                </li>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Newsletter</h5>
                            <div className="newsletter">
                                <input type="email" placeholder="Enter Your Email Address" />
                                <button type="submit">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">2023 furiro. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default ClientLayout;

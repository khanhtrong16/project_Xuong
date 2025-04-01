import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            {" "}
            {/* Shop Banner */}
            <section className="shop-banner">
                <div>
                    <h1>Cart</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Cart
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* Cart Section */}
            <section className="cart-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="https://picsum.photos/80/80?random=1" alt="Product 1" />
                                                <span>Asgaard sofa</span>
                                            </td>
                                            <td>Rp 250.000</td>
                                            <td>
                                                <input type="number" defaultValue={1} min={1} />
                                            </td>
                                            <td>
                                                Rp 250.000
                                                <i className="fas fa-trash-alt delete-btn" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cart-totals">
                                <h3>Cart Totals</h3>
                                <p>
                                    Subtotal: <span>Rp 250.000</span>
                                </p>
                                <p className="total">
                                    Total: <span>Rp 250.000</span>
                                </p>
                                <Link to={"/checkout"}>
                                    <button className="btn btn-checkout">Check Out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <i className="fas fa-gem" />
                            <h5>High Quality</h5>
                            <p>crafted from top materials</p>
                        </div>
                        <div className="col-md-3">
                            <i className="fas fa-shield-alt" />
                            <h5>Warranty Protection</h5>
                            <p>Over 2 years</p>
                        </div>
                        <div className="col-md-3">
                            <i className="fas fa-shipping-fast" />
                            <h5>Free Shipping</h5>
                            <p>Order over 150 $</p>
                        </div>
                        <div className="col-md-3">
                            <i className="fas fa-headset" />
                            <h5>24 / 7 Support</h5>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;

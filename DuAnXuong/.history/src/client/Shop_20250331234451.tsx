import { useList } from "@refinedev/core";
import { log } from "console";
import React from "react";
const Shop = () => {
    const { data, isLoading } = useList({ resource: "products" });
    if (isLoading) return <div>Loading...</div>;
    console.log(data?.data);

    return (
        <div>
            {" "}
            {/* Shop Banner */}
            <section className="shop-banner">
                <h1>Shop</h1>
            </section>
            {/* Filter and Sort Section */}
            <section className="filter-sort">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <button className="btn-filter">
                                <i className="fas fa-filter" /> Filter
                            </button>
                        </div>
                        <div className="col-md-6 text-center showing">Showing 1–12 of 20 results</div>
                        <div className="col-md-3 text-end">
                            <select className="form-select">
                                <option>Sort By</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products Section */}
            <section className="products py-5">
                <div className="container">
                    <div className="row">
                        {data?.data.map((item: any) => (
                            <div className="col-md-3 mb-4" key={item.id}>
                                <div className="product-card">
                                    <img src={item.thumbnail} />
                                    <span className="discount">-20%</span>
                                    <button className="add-to-cart">Add to Cart</button>
                                    <h6>{item.name}</h6>
                                    <p>Rp {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            {/* Why Choose Us Section */}
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

export default Shop;

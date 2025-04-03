import { useList } from "@refinedev/core";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useList({ resource: "products" });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-overlay">
          <p className="text-uppercase">New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <Link to={"/shop"}>
            <button className="btn">Shop Now</button>
          </Link>
        </div>
      </section>
      {/* Categories Section */}
      <section className="categories py-5">
        <div className="container">
          <h2 className="text-center mb-4">Browse The Range</h2>
          <p className="text-center text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="row">
            <div className="col-md-4">
              <img src="https://picsum.photos/350/350?random=1" alt="Dining" />
              <h5>Dining</h5>
            </div>
            <div className="col-md-4">
              <img src="https://picsum.photos/350/350?random=2" alt="Living" />
              <h5>Living</h5>
            </div>
            <div className="col-md-4">
              <img src="https://picsum.photos/350/350?random=3" alt="Bedroom" />
              <h5>Bedroom</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="products py-5">
        <div className="container">
          <h2 className="text-center mb-5">Outstanding Products</h2>
          <div className="row">
            {data?.data.map((item: any) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <Link
                  to={"/productdetail"}
                  className="text-decoration-none text-black"
                >
                  <div className="product-card">
                    <img src={item.thumbnail} alt={item.name} />
                    <h6>{item.name}</h6>
                    <p>Rp {item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to={"/productdetail"}>
              <button className="btn btn-outline-dark">Show More</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="products py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Products</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <Link
                to={"/productdetail"}
                className="text-decoration-none text-black"
              >
                <div className="product-card">
                  <img
                    src="https://picsum.photos/250/250?random=4"
                    alt="Product 1"
                  />
                  <h6>Syltherine</h6>
                  <p>Rp 2.500.000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3 mb-4">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=5"
                  alt="Product 2"
                />
                <h6>Leviosa</h6>
                <p>Rp 1.800.000</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=6"
                  alt="Product 3"
                />
                <h6>Lolito</h6>
                <p>Rp 3.200.000</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=7"
                  alt="Product 4"
                />
                <h6>Respira</h6>
                <p>Rp 2.900.000</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to={"/productdetail"}>
              <button className="btn btn-outline-dark">Show More</button>
            </Link>
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
      {/* Inspiration Section */}
      {/* <section class="inspiration-section"></div>
       */}
    </div>
  );
};

export default Home;

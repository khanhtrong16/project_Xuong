import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Asgaard sofa
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-3 product-thumbnails">
                  <img
                    src="https://picsum.photos/80/80?random=1"
                    alt="Thumbnail 1"
                  />
                  <img
                    src="https://picsum.photos/80/80?random=2"
                    alt="Thumbnail 2"
                  />
                  <img
                    src="https://picsum.photos/80/80?random=3"
                    alt="Thumbnail 3"
                  />
                </div>
                <div className="col-9 product-main-img">
                  <img
                    src="https://picsum.photos/500/400?random=4"
                    alt="Main Product"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 product-details">
              <h1>Asgaard sofa</h1>
              <p className="price">Rp 250.000</p>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>5 Customer Reviews</span>
              </div>
              <p className="description">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="colors">
                <span className="color-1" />
                <span className="color-2" />
                <span className="color-3" />
              </div>
              <div className="size">
                <label>Size: </label>
                <select>
                  <option>L</option>
                  <option>M</option>
                  <option>S</option>
                </select>
              </div>
              <div className="quantity">
                <label>Quantity: </label>
                <input type="number" defaultValue={1} min={1} />
              </div>
              <div className="actions">
                <button className="btn btn-add">Add To Cart</button>
                <button className="btn btn-compare">Compare</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs Section */}
      <section className="tabs-section">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#description"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#additional-info"
              >
                Additional Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="tab-pane fade" id="additional-info">
              <p>
                Additional information about the product will go here. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="tab-pane fade" id="reviews">
              <p>
                Customer reviews will be displayed here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Images */}
      <section className="additional-images">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://picsum.photos/600/300?random=5"
                alt="Additional Image 1"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://picsum.photos/600/300?random=6"
                alt="Additional Image 2"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className="related-products">
        <div className="container">
          <h2>Related Products</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=7"
                  alt="Product 1"
                />
                <span className="discount">-20%</span>
                <button className="add-to-cart">Add to Cart</button>
                <h6>Syltherine</h6>
                <p>Rp 2.500.000</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=8"
                  alt="Product 2"
                />
                <button className="add-to-cart">Add to Cart</button>
                <h6>Leviosa</h6>
                <p>Rp 1.800.000</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=9"
                  alt="Product 3"
                />
                <span className="discount">-15%</span>
                <button className="add-to-cart">Add to Cart</button>
                <h6>Lolito</h6>
                <p>Rp 3.200.000</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://picsum.photos/250/250?random=10"
                  alt="Product 4"
                />
                <button className="add-to-cart">Add to Cart</button>
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
    </div>
  );
};

export default ProductDetail;

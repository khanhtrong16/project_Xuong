import React from 'react'

const CheckOut = () => {
  return (
    <div>  {/* Shop Banner */}
  <section className="shop-banner">
    <div>
      <h1>Checkout</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>
    </div>
  </section>
  {/* Checkout Section */}
  <section className="checkout-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Billing Details</h2>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="company-name">Company Name (Optional)</label>
              <input type="text" id="company-name" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <label htmlFor="street-address">Street Address</label>
              <input type="text" id="street-address" placeholder="Street Address" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="country">Country / Region</label>
                  <select id="country">
                    <option value="">Select a country</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="province">Province</label>
                  <select id="province">
                    <option value="">Select a province</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bali">Bali</option>
                    <option value="yogyakarta">Yogyakarta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="zip-code">ZIP Code</label>
              <input type="text" id="zip-code" placeholder="ZIP Code" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="additional-info">Additional Information</label>
              <textarea id="additional-info" placeholder="Additional Information" defaultValue={""} />
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <div className="order-summary">
            <div className="product">
              <span>Asgaard sofa x 1</span>
              <span>Rp 250.000</span>
            </div>
            <div className="product">
              <span>Subtotal</span>
              <span>Rp 250.000</span>
            </div>
            <div className="product">
              <span className="total">Total</span>
              <span className="total">Rp 250.000</span>
            </div>
            <hr />
            <div className="payment-methods">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="payment-method" id="bank-transfer" defaultValue="bank-transfer" defaultChecked />
                <label className="form-check-label" htmlFor="bank-transfer"> Direct Bank Transfer </label>
              </div>
              <p>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order
                will not be shipped until the funds have cleared in our account.
              </p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="payment-method" id="cash-on-delivery" defaultValue="cash-on-delivery" />
                <label className="form-check-label" htmlFor="cash-on-delivery"> Cash on Delivery </label>
              </div>
              <p>
                Your personal data will be used to support your experience throughout this website, to manage access to your
                account, and for other purposes described in our privacy policy.
              </p>
            </div>
            <button className="btn btn-place-order">Place Order</button>
          </div>
        </div>
      </div>
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
  </section></div>

  )
}

export default CheckOut
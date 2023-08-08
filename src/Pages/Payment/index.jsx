import React from "react";
import { H1 } from "../../Helper/headings";
import "../../Styles/payment.css";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";

const Payment = () => {
  return (
    <Layout>
      <main>
        <section className="main-section payment-section">
          <div className="container">
            <H1 text={"LINK  GENERATION  FOR  PAYMENT"} center={true} />
            <form>
              <div className="input-container">
                <div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    id="amount"
                    type="number"
                    name="description"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label htmlFor="currency">Currency</label>
                  <select id="currency" required>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>PKR</option>
                    <option>AED</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="paymentGateway">Payment Gateway</label>
                  <select id="paymentGateway" required>
                    <option>Stripe</option>
                    <option>Paypal</option>
                  </select>
                </div>
              </div>
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" rows="4"></textarea>
              <ButtonComp text="Submit" center transparent={false} />
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Payment;

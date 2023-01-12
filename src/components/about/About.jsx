import "./About.css";

export const About = () => {
  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>Who are we ?</h1>
      <div className="aboutbox">
        <div>
          <p style={{ textAlign: "left" }}>
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

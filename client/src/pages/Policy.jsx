import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <>
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
            />
        </div>
        <div className="col-md-4">
<h4>DATA COLLECTION</h4>
          <p>
          We collect personal information such as your name, address, and payment details to process orders, enhance your shopping experience, and offer personalized recommendations. This information is also used for customer support and to send updates or promotional offers, with your consent.</p>
          <h4>DATA SECURITY</h4>
          <p>
          Your data security is our priority. We employ advanced encryption and secure payment processing to protect your information. Our systems are regularly updated to comply with industry standards and safeguard against unauthorized access.</p>
          <h4>THIRD PARTY SHARING</h4>
          <p>To facilitate order fulfillment and payment processing, we may share your information with trusted third parties, including payment processors and shipping companies. We ensure that these partners adhere to strict data protection standards.</p>
          
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Policy;
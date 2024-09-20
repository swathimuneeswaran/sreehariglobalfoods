import React, { useEffect } from "react";
import "../styles/Contact.css";
import Footer from "../component/Footer";
import contact from "../assets/images/contact.jpg";
import Enquiry from "../component/home/Enquiry";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; 

const ContactUs = () => {
  useEffect(() => {
    // Initialize the carousel when the component is mounted
    window.$('.carousel').carousel();
  }, []);

  return (
    <>
      <main>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-food.jpg"
                className="d-block w-100"
                style={{ height: "760px" }}
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="carousel-text">Healthy Food Choices</h2>
                <p>Discover our range of nutritious products!</p>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/911/015/non_2x/legumes-fruit-and-salmon-fish-on-a-wooden-chopping-board-free-photo.jpg"
                style={{ height: "760px" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="carousel-text">Fresh and Delicious</h2>
                <p>Your source for the finest quality ingredients.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={contact}
                style={{ height: "760px" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="carousel-text">Contact Us Today</h2>
                <p>We are here to assist you with any inquiries.</p>
              </div>
            </div>
          </div>
        </div>

        <Enquiry page="contact" />

        <div className="container-fluid">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.724829109067!2d77.92774671092246!3d13.242577687044434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badffe2ea240439%3A0xe260345e07aa05da!2s20%2C%20Hoskote%20-%20Chintamani%20Rd%2C%20Nelavagilu%2C%20H%20Cross%2C%20Karnataka%20562122!5e0!3m2!1sen!2sin!4v1725945613055!5m2!1sen!2sin"
              className="col-12 col-lg-11 mx-auto"
              style={{ height: "80vh" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;

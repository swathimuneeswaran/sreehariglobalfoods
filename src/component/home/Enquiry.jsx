import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import Location from "@mui/icons-material/LocationOn";

function Enquiry({ page }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form data submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {" "}
      <section
        style={
          page == "home"
            ? { backgroundColor: "rgba(255, 236, 171, 255)" }
            : { backgroundColor: "rgba(197, 224, 180, 255)" }
        }
        className="enquiry-section"
      >
        <div className="contact-info">
          <h1>Get a Call Back</h1>
          <div>
            <div className="d-flex align-items-end">
              <Location className="mb-1" />

              <strong>Address:</strong>
            </div>

            <div className="d-flex flex-column py-1">
              <span>Shree Hari Global Foods </span>
              <p>
                {" "}
                Plot No. 20/2, Chintamani Road, Mallimakanapura Village, Hoskote
                Taluk, Bengaluru 562122
              </p>
              <span>GSTIN: 29AFIFS2138E1ZX </span>
            </div>
          </div>
          <p>
            <strong>Phone Number:</strong>
            <br />
            <a href="tel:+7338490894">
              <PhoneIcon />
              +91 7338490894
            </a>
          </p>
          <p>
            <strong>Email Address:</strong>
            <br />
            <a href="mailto:shreehariglobalfoods@gmail.com">
              shreehariglobalfoods@gmail.com
            </a>
          </p>
        </div>
        <div className="form-container">
          <h1>Enquiry Form</h1>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Company Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Post your requirements"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Enquiry;

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

import Footer from "../component/Footer";
import Enquiry from "../component/home/Enquiry";
import Frontlanding from "../component/home/Frontlanding";
import GridCategories from "../component/home/GridCategories";
import HealthBenefits from "../component/home/HealthBenefits";

import fruits1_powder from "../assets/images/fruits1_powder.jpg";
import leaf1_powder from "../assets/images/leaf1_powder.jpg";
import mango_about from "../assets/images/mango_about.jpg";
import rose_powder from "../assets/images/rose_powder.jpg";
import veg_powder from "../assets/images/veg_powder.jpg";

const HomePage = () => {
  AOS.init();

  return (
    <>
      <Frontlanding />

      <section id="why_choose_us">
        <h1 className="fw-bolder">
          Our Mission, <span className="heading-green"> " Your Delight " </span>
        </h1>
        <div className="why_container">
          <img
            src={mango_about}
            alt="Customer Satisfaction"
            data-aos="fade-right"
          />
          <div className="choose" data-aos="fade-left">
            <h2 className="fw-bold">
              Why Choose <span className="heading-green"> Us </span>{" "}
            </h2>
            <div className="benefits">
            <ul>
                <li>
                  <span><FontAwesomeIcon icon={faLeaf}  style={{color:"green"}}/></span>
                  Premium Quality: Nutrient-rich dehydrated fruits and vegetables, available in raw and powdered forms.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLeaf} style={{color:"green"}}/></span>
                  Versatile Applications: Ideal for food manufacturing, dietary supplements, pet food, cosmetics, Ayurvedic medicine, and instant foods.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLeaf} style={{color:"green"}}/></span>
                  Eco-Friendly: Advanced solar drying technology reduces environmental impact and food waste.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLeaf} style={{color:"green"}}/></span>
                  Empowering Farmers: Supports sustainable agriculture and local farming communities.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLeaf} style={{color:"green"}}/></span>
                  Global Reach: Robust export and import capabilities with ISO, MSME, APEDA, FEDA, and FSSAI certification.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="variety_of_powders mt-5 pt-5 ">
        <h1 className="fw-bolder">
          {" "}
          Our Popular Top <span className="heading-green">
            {" "}
            Categories{" "}
          </span>{" "}
        </h1>
        <div className="powders">
          <div className="powder_item">
            <img
              src={veg_powder}
              alt="Dehydrated Vegetable Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Vegetable - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={fruits1_powder}
              alt="Dehydrated Fruit Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Fruit - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={leaf1_powder}
              alt="Dehydrated Leaf Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Leaf - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={rose_powder}
              alt="Dehydrated Rose Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Rose - flakes & powder</h3>
          </div>
        </div>
      </section>

      <GridCategories />
      <HealthBenefits />
      <Enquiry page="home" />
      <Footer />
    </>
  );
};

export default HomePage;

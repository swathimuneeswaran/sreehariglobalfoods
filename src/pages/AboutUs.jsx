import React,{useState,useEffect} from "react";
import "../styles/About.css";
import about from "../assets/images/about.jpeg";
import mud_removal from "../assets/stages/mud_removal.webp";
import washing from "../assets/stages/washing.webp";
import slicing from "../assets/stages/slicing.webp";
import dehydrating from "../assets/stages/dehydrating.webp";
import grinding from "../assets/stages/grinding.webp";
import packing from "../assets/stages/packing.webp";
import unit1 from "../assets/images/unit1.jpeg";
import unit2 from "../assets/images/unit2.jpeg";
import Manu_unit1 from "../assets/images/Manu_unit1.jpg";
import Manu_unit2 from "../assets/images/Manu_unit2.jpg";
import Manu_unit3 from "../assets/images/Manu_unit3.jpg";
import Manu_unit5 from "../assets/images/Manu_unit5.jpg";
import fruit_flakes1 from "../assets/images/fruit_flakes1.jpg";
import fruits_powder from "../assets/images/fruits_powder.jpg";
import veg_flakes1 from "../assets/images/veg_flakes1.jpg";
import veg_powder from "../assets/images/veg_powder.jpg";
import leaf_flakes2 from "../assets/images/leaf_flakes2.jpg";
import leaf_powder from "../assets/images/leaf_powder.jpg"
import rose_flakes from "../assets/images/rose_flakes.png";
import rose_powder1 from "../assets/images/rose_powder1.jpg"
import Footer from "../component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ImageFade = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 minutes

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="image-fade">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Product"
          className={`fade-img ${index === currentImageIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <div className="carousel-inner">
        <div className="carousel-item active  img_carousel" data-interval="10000">
          <img
            src={about}
            className="d-block w-100"
            style={{ height: "850px" }}
            alt="About Us"
          />
          <div className="carousel-caption1 d-flex flex-column justify-content-center">
            <h2 className="carousel-text1">
              Nature’s Power in <br></br>
              <span>Powder & Flakes...</span>
            </h2>
            <p>
              Packed with nutrients and bursting with flavor, our dehydrated
              powders and flakes provide an easy way to add natural health and
              wellness to your everyday life.
            </p>
          </div>
        </div>
      </div>

      <section className="section_about">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="entire_about" id="about_shree">
          <div className="main_goal">
            <h2>Our main goal is to make sure our customers are happy.</h2>
            <p>
              <span style={{ color: "green" }}>SHREE HARI GLOBAL FOODS</span> We
              are a trusted partner in the international and domestic
              agricultural market. We are passionate about delivering premium
              quality vegetable dried grain powder to our customers. With a
              commitment to health, sustainability, and innovation, we strive to
              provide nutritious and flavorful products that enrich lives and
              promote well-being. We prioritize quality in every aspect of our
              business, from sourcing the finest ingredients to maintaining
              stringent quality control standards throughout the manufacturing
              process. We are dedicated to sustainability and environmental
              responsibility. We work closely with farmers who share our
              commitment to sustainable farming practices.
            </p>
          </div>
          <div className="about_img">
            <img
              src="https://img.freepik.com/premium-photo/modern-food-spices-photography_1223255-5893.jpg?w=826"
              alt="Our Products"
            />
          </div>
        </div>
      </section>

      <div className="flow_head">
        <h1 style={{ fontSize: "3rem" }}>
          Flow of <span style={{ color: "green" }}>SHGF Processing</span>
        </h1>
        <section className="flowchart-container">
          <div className="flowchart">
            {/* Step 1 */}
            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={mud_removal}
                  alt="Step 1"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">1</div>
                <div className="step-content">Stage1: Cleaning Process</div>
                <div className="step-content">Step 1: Mud Removal</div>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            {/* Step 2 */}
            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={washing}
                  alt="Step 2"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">2</div>
                <div className="step-content">Stage1: Cleaning Process</div>
                <div className="step-content">Step 2: Washing under water</div>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            {/* Step 3 */}
            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={slicing}
                  alt="Step 3"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">3</div>
                <div className="step-content">Stage1: Cleaning Process</div>
                <div className="step-content">
                  Step 3: Slicing (Manual & Machine)
                </div>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={dehydrating}
                  alt="Step 4"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">4</div>
                <div className="step-content">Stage2: Dehydrating Process</div>
                <div className="step-content">
                  Step 1: Controlled Temp and Humidity
                </div>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={grinding}
                  alt="Step 4"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">5</div>
                <div className="step-content">Stage3: Grinding </div>
              </div>
            </div>

            <div className="flow-arrow">↓</div>
            <div className="flow-step box">
              <div className="step-image">
                <img
                  src={packing}
                  alt="Step 4"
                  className="process-image-round"
                />
              </div>
              <div className="step-text">
                <div className="step-number">6</div>
                <div className="step-content">Stage4: Packing </div>
              </div>
            </div>
          </div>

          <div className="flowchart-images">
            <img src={unit1} alt="Manufacturing Unit 1" />
            <img src={unit2} alt="Manufacturing Unit 2" />
            <img src={Manu_unit1} alt="Manufacturing Unit 1" />
            <img src={Manu_unit2} alt="Manufacturing Unit 2" />
            <img src={Manu_unit3} alt="Manufacturing Unit 1" />
            {/* <img src={Manu_unit4} alt="Manufacturing Unit 2"/> */}
            <img src={Manu_unit5} alt="Manufacturing Unit 1" />
            {/* <img src={Manu_unit6} alt="Manufacturing Unit 2"/> */}
          </div>
        </section>
      </div>

      <section className="various_items">
      <h1 style={{ fontSize: "3rem",textAlign:"center" ,marginTop:"50px"}}>
         Product <span style={{ color: "green" }}>Lists</span>
        </h1>
      <div className="container">
        {/* First Section */}
        <div data-aos="fade-left" data-aos-delay="700" className="contain_box1">
          <ImageFade images={[fruit_flakes1, fruits_powder]} />
          <p>
          <span style={{fontWeight:"bold",color:"green"}}>Dehydrated fruit flakes & powders</span> offer a convenient way to enjoy the natural goodness of fruits all year round. Through a gentle drying process, the moisture is removed from fresh fruits while retaining their essential nutrients, flavor, and color. These flakes and powders are rich in vitamins, antioxidants, and fibers, making them a healthy addition to smoothies, baked goods, cereals, and snacks. They are versatile, shelf-stable, and require no refrigeration, making them ideal for busy lifestyles. Perfect for both culinary and health-conscious uses, dehydrated fruit products are a fantastic alternative to fresh fruit, preserving the essence of nature with no artificial additives. Whether you're a home cook or a food manufacturer, these natural products enhance flavor and nutrition in any recipe.


          </p>
        </div>

        {/* Vision Section */}
        {/* <h1 className="vision">Vision</h1> */}
        <div data-aos="fade-right" className="contain_box2">
          <p>
         <span style={{fontWeight:"bold",color:"green"}}> Dehydrated vegetable flakes & powders</span> are a versatile solution for adding the rich flavor and nutrients of vegetables to meals without the need for refrigeration. Through a natural dehydration process, fresh vegetables are dried to preserve their vitamins, minerals, and vibrant colors. These products are perfect for soups, stews, sauces, and seasonings, offering a quick and easy way to incorporate vegetables into daily cooking. Rich in fiber and essential nutrients, dehydrated vegetables retain much of their original taste and health benefits. Ideal for food storage and convenience, they provide a long shelf life while ensuring you can enjoy wholesome, nutritious vegetables any time of the year. With no artificial preservatives, these flakes and powders are a natural, convenient way to boost your meals.


          </p>
          <ImageFade images={[veg_flakes1, veg_powder]} />
        </div>

        {/* Mission Section */}
        {/* <h3 className="mission">Mission</h3> */}
        <div data-aos="fade-left" className="contain_box3">
          <ImageFade images={[leaf_flakes2, leaf_powder]} />
          <p>
          <span style={{fontWeight:"bold",color:"green"}}>Dehydrated leaf flakes & powders</span> offer a convenient way to enjoy the nutritional benefits of various leafy greens year-round. Through a gentle drying process, fresh leaves like spinach, moringa, and kale are dehydrated, preserving their vitamins, minerals, and antioxidants. These products are excellent for adding to smoothies, soups, teas, or baking, making it easy to incorporate green, nutrient-rich ingredients into any meal. With their long shelf life and concentrated nutrients, dehydrated leaf powders provide a quick and efficient way to boost immune health and energy. Free from artificial additives, they are perfect for health-conscious individuals looking for a natural supplement or a way to enhance the flavor and nutrition of their favorite recipes.
          </p>
        </div>

        {/* Final Section */}
        <div data-aos="fade-right" className="contain_box2">
          <p>
          <span style={{fontWeight:"bold",color:"green"}}>Dehydrated rose flakes & powders</span> bring the natural fragrance and beauty of roses into a versatile, long-lasting form. Made from carefully dried rose petals, these products retain their delicate aroma, vibrant color, and beneficial properties. Rich in antioxidants, rose powders are often used in skincare routines for their soothing and rejuvenating effects. They can also be added to teas, desserts, or beverages, infusing a subtle floral flavor. Dehydrated rose flakes are a popular ingredient in potpourri, DIY crafts, and natural beauty treatments. With no preservatives or artificial additives, dehydrated rose products are a perfect blend of elegance and wellness, making them a favorite among beauty and culinary enthusiasts alike.
          </p>
          <ImageFade images={[rose_flakes, rose_powder1]} />
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
};

export default AboutUs;

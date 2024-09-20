import React, { useState, useEffect, useRef } from "react";
import ProductFruit from "./ProductFruit";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import side1 from "../../assets/images/side1.webp";
import side2 from "../../assets/images/side2.webp";
import side3 from "../../assets/images/side3.jpg";
import side4 from "../../assets/images/side4.jpg";
import side5 from "../../assets/images/side5.jpg";

const ProductContent = ({ searchQuery }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPaused, setIsPaused] = useState(false); // State to track if scrolling is paused
  const scrollingBoxRef = useRef(null); // Ref to access the scrolling box element

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (categories) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = new Set(prevCategories);

      categories.forEach((category) => {
        if (newCategories.has(category)) {
          newCategories.delete(category);
        } else {
          newCategories.add(category);
        }
      });

      return Array.from(newCategories);
    });
  };

  const handleScrollPause = () => {
    if (scrollingBoxRef.current) {
      scrollingBoxRef.current.style.animationPlayState = "paused";
      setIsPaused(true);
    }
  };

  const handleScrollResume = () => {
    if (scrollingBoxRef.current) {
      scrollingBoxRef.current.style.animationPlayState = "running";
      setIsPaused(false);
    }
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  return (
    <>
      <div className="container-fluid variety_side">
        <div className="row">
          <div className="col-3 sticky-sidebar">
            <div className="side_bar">
            <h5 id="varieties">DEHYDRATES</h5>
            {/* Fruits Section */}
            <div className="section">
              <div className="section-header">
                <h5
                  onClick={() =>
                    handleCategoryClick(["fruit flakes", "fruit powder"])
                  }
                >
                  Fruits
                </h5>
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="fruitFlakes"
                    name="fruitFlakes"
                    checked={selectedCategories.includes("fruit flakes")}
                    onChange={() => handleCategoryClick(["fruit flakes"])}
                  />
                  <label htmlFor="fruitFlakes">Fruits Flakes</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="fruitPowder"
                    name="fruitPowder"
                    checked={selectedCategories.includes("fruit powder")}
                    onChange={() => handleCategoryClick(["fruit powder"])}
                  />
                  <label htmlFor="fruitPowder">Fruits Powder</label>
                </li>
              </ul>
            </div>

            {/* Vegetable Section */}
            <div className="section">
              <div className="section-header">
                <h5
                  onClick={() =>
                    handleCategoryClick([
                      "vegetable flakes",
                      "vegetable powder",
                    ])
                  }
                >
                  Vegetables
                </h5>
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="vegetableFlakes"
                    name="vegetableFlakes"
                    checked={selectedCategories.includes("vegetable flakes")}
                    onChange={() => handleCategoryClick(["vegetable flakes"])}
                  />
                  <label htmlFor="vegetableFlakes">Vegetable Flakes</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="vegetablePowder"
                    name="vegetablePowder"
                    checked={selectedCategories.includes("vegetable powder")}
                    onChange={() => handleCategoryClick(["vegetable powder"])}
                  />
                  <label htmlFor="vegetablePowder">Vegetable Powder</label>
                </li>
              </ul>
            </div>

            {/* Leafy Greens Section */}
            <div className="section">
              <div className="section-header">
                <h5
                  onClick={() =>
                    handleCategoryClick(["leaf flakes", "leaf powder"])
                  }
                >
                  Leafy Greens
                </h5>
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="leafFlakes"
                    name="leafFlakes"
                    checked={selectedCategories.includes("leaf flakes")}
                    onChange={() => handleCategoryClick(["leaf flakes"])}
                  />
                  <label htmlFor="leafFlakes">Leaf Flakes</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="leafPowder"
                    name="leafPowder"
                    checked={selectedCategories.includes("leaf powder")}
                    onChange={() => handleCategoryClick(["leaf powder"])}
                  />
                  <label htmlFor="leafPowder">Leaf Powder</label>
                </li>
              </ul>
            </div>

            {/* Flowers Section */}
            <div className="section">
              <div className="section-header">
                <h5 onClick={() => handleCategoryClick(["rose"])}>Flowers</h5>
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="roseFlakes"
                    name="roseFlakes"
                    checked={selectedCategories.includes("rose")}
                    onChange={() => handleCategoryClick(["rose"])}
                  />
                  <label htmlFor="roseFlakes">Rose Flakes</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="rosePowder"
                    name="rosePowder"
                    checked={selectedCategories.includes("rose")}
                    onChange={() => handleCategoryClick(["rose"])}
                  />
                  <label htmlFor="rosePowder">Rose Powder</label>
                </li>
              </ul>
            </div>

            {windowWidth > 900 && (
              <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className='variety_side_img'>
                  <img src={side1} width="100%" alt="Sidebar" className="sec_img" />
                </div>
                <div className='variety_side_img'>
                  <img src={side2} width="100%" alt="Sidebar" className="sec_img" />
                </div>
                <div className='variety_side_img'>
                  <img src={side3} width="100%" alt="Sidebar" className="sec_img" />
                </div>
                <div className='variety_side_img'>
                  <img src={side4} width="100%" alt="Sidebar" className="sec_img" />
                </div>
                <div className='variety_side_img'>
                  <img src={side5} width="100%" alt="Sidebar" className="sec_img" />
                </div>
              </Carousel>
            )}
            </div>

            {/* Scrolling Boxes Section for Mobile */}
            {windowWidth <= 600 && (
              <div className="scrolling-boxes-wrapper">
                <div
                  className="scrolling-boxes"
                  ref={scrollingBoxRef}
                  onClick={isPaused ? handleScrollResume : handleScrollPause}
                >
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick(["fruit flakes", "fruit powder"])
                    }
                  >
                    <span className="icon">🍎</span>
                    <br />
                    Fruit Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick([
                        "vegetable flakes",
                        "vegetable powder",
                      ])
                    }
                  >
                    <span className="icon">🍅</span>Vegetable Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick(["leaf flakes", "leaf powder"])
                    }
                  >
                    <span className="icon">🍀</span>Leaf Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() => handleCategoryClick(["rose"])}
                  >
                    <span className="icon">🌸</span>Rose Powder & Flakes
                  </div>
                  {/* Duplicate content for seamless scrolling */}
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick(["fruit flakes", "fruit powder"])
                    }
                  >
                    <span className="icon">🍎</span>Fruit Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick([
                        "vegetable flakes",
                        "vegetable powder",
                      ])
                    }
                  >
                    <span className="icon">🍅</span>Vegetable Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() =>
                      handleCategoryClick(["leaf flakes", "leaf powder"])
                    }
                  >
                    <span className="icon">🍀</span>Leaf Powders & Flakes
                  </div>
                  <div
                    className="box_content"
                    onClick={() => handleCategoryClick(["rose"])}
                  >
                    <span className="icon">🌸</span>Rose Powder & Flakes
                  </div>
                </div>
              </div>
            )}


             
          </div>

        

          <div className="col-9">
            <ProductFruit
              searchQuery={searchQuery}
              categories={selectedCategories}
            />
          </div>
          
        </div>
      </div>

      <style jsx>{`
        input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        input[type="checkbox"] + label {
          position: relative;
          padding-left: 30px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
        }

        input[type="checkbox"] + label:before {
          content: "";
          position: absolute;
          left: 0;
          top: 5;
          width: 16px;
          height: 16px;
          border: 2px solid #000;
          background-color: #fff;
          border-radius: 3px;
          transition: background-color 0.3s ease;
        }

        input[type="checkbox"]:checked + label:before {
          background-color: green;
          border-color: green;
        }

        input[type="checkbox"]:checked + label:after {
          content: "✓";
          position: absolute;
          left: 3px;
          top: 4px;
          font-size: 12px;
          color: #fff;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        label {
          margin-left: 10px;
        }

        .scrolling-boxes-wrapper {
          overflow: hidden; /* Hide the overflow to create the illusion of endless scrolling */
        }

        .scrolling-boxes {
          display: flex;
          padding: 10px 0;
          animation: scroll 15s linear infinite;
        }

        .scrolling-boxes.paused {
          animation-play-state: paused;
        }

        .box_content {
          flex: 0 0 auto;
          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 100px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 24px;
          margin-right: 10px;
        }

        .box_content span {
          display: block;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-250%);
          }
        }
      `}</style>
    </>
  );
};

export default ProductContent;

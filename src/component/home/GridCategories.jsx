import { useEffect } from "react";
import Slider from "react-slick";

import ginger from "../../assets/images/ginger.jpg";
import carrot_flakes from "../../assets/images/carrot_flakes.jpg";
import tomato_flakes from "../../assets/images/tomato_flakes.jpg";
import lemon_powder from "../../assets/images/lemon_powder.jpg";
import Company_logo from "../../assets/images/Company_logo.png";
import apple_flakes from "../../assets/images/apple_flakes.png";
import banana_flakes from "../../assets/images/banana_flakes.jpg";
import pineapple_flakes from "../../assets/images/pineapple_flakes.png";
import kiwi_powder from "../../assets/images/kiwi_powder.png";
import mango_powder from "../../assets/images/mango_powder.png";
import jack_flakes from "../../assets/images/jack_flakes.png";
import orange_powder from "../../assets/images/orange_powder.png";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import rose1 from "../../assets/images/rose1.png";
import rose2 from "../../assets/images/rose2.jpg";
import rose3 from "../../assets/images/rose3.jpg";
import rose4 from "../../assets/images/rose4.jpg";
import rose5 from "../../assets/images/rose5.jpg";
import rose6 from "../../assets/images/rose6.jpg";
import rose7 from "../../assets/images/rose7.jpg";
import rose8 from "../../assets/images/rose8.jpg";

import leaf1 from "../../assets/images/leaf1.jpg";
import leaf2 from "../../assets/images/leaf2.jpg";
import leaf3 from "../../assets/images/leaf3.png";
import leaf4 from "../../assets/images/leaf4.png";
import leaf5 from "../../assets/images/leaf5.png";
import If_pow1 from "../../assets/images/lf_pow1.jpg";
import If_pow2 from "../../assets/images/lf_pow2.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import fruits_poster from "../../assets/images/fruits_poster.jpg";
import leaf_poster from "../../assets/images/leaf_poster.jpg";
import veg_poster from "../../assets/images/veg_poster.jpg";
import rose_poster from "../../assets/images/rose_poster.jpg";
import beetroot_flakes from "../../assets/images/beetroot_flakes.jpg";
import bitter_powder from "../../assets/images/bitter_powder.jpg";
import ginger_nobg from "../../assets/images/ginger_nobg.png";
import peas_powder from "../../assets/images/peas_powder.jpg";
import new_poster from "../../assets/images/banner2.jpg";
function GridCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change to 3000 for 3 seconds or 4000 for 4 seconds
    arrows: true,
  };

  useEffect(() => {
    const updateImageSource = () => {
      const smallScreenImages = document.querySelectorAll(
        ".small-screen-image"
      );
      smallScreenImages.forEach((image) => {
        if (window.innerWidth <= 700) {
          image.src = new_poster;
        } else {
          if (image.alt.includes("Vegetable Poster")) {
            image.src = veg_poster;
          } else if (image.alt.includes("Fruit Poster")) {
            image.src = fruits_poster;
          } else if (image.alt.includes("Leaf Poster")) {
            image.src = leaf_poster;
          } else if (image.alt.includes("Rose Poster")) {
            image.src = rose_poster;
          }
        }
      });
    };

    window.addEventListener("resize", updateImageSource);
    updateImageSource(); // Initial call

    return () => {
      window.removeEventListener("resize", updateImageSource);
    };
  }, []);

  return (
    <>
      {" "}
      <section className="mt-5" id="grid-categories">
        <Slider {...settings}>
          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={veg_poster}
                alt="Vegetable Poster"
              />
              <div className="rows">
                <div className="columns ">
                  <img src={tomato_flakes} alt="Tomato Flakes" />
                  <img src={beetroot_flakes} alt="Beetroot Flakes" />
                </div>
                <div className="columns col1 ">
                  <img src={carrot_flakes} alt="Carrot Flakes" />
                  <img
                    src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                    alt="Image 1"
                  />
                </div>
                <div className="columns col1">
                  <img src={peas_powder} alt="Peas Powder" />
                  <img src={lemon_powder} alt="Lemon Powder" />
                  <img src={ginger} alt="ginger" />
                </div>
                <h3>
                  Dehydrated fruit powder is made by drying fresh fruits and
                  then grinding them into a fine powder.{" "}
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={fruits_poster}
                alt="Fruit Poster"
              />
              <div className="rows">
                <div className="columns">
                  <img src={apple_flakes} alt="Apple Flakes" />
                  <img src={banana_flakes} alt="Banana Flakes" />
                </div>
                <div className="columns col1">
                  <img src={jack_flakes} alt="Jackfruit Flakes" />
                  <img
                    src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                    alt="Image 1"
                  />
                </div>
                <div className="columns col1">
                  <img src={kiwi_powder} alt="Kiwi Powder" />
                  <img src={pineapple_flakes} alt="Pineapple Flakes" />
                  <img src={mango_powder} alt="Mango Powder" />
                </div>
                <h3>
                  Dehydrated fruit powder is made by drying fresh fruits and
                  then grinding them into a fine powder.{" "}
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={leaf_poster}
                alt="Leaf Poster"
              />
              <div className="rows">
                <div className="columns">
                  <img src={leaf1} alt="Leaf 1" />
                  <img src={leaf2} alt="Leaf 2" />
                  <img src={leaf4} className="col1" alt="Leaf 4" />
                </div>
                <div className="columns col1">
                  <img src={leaf4} alt="Leaf 4" />
                  <img src={leaf5} alt="Leaf 5" />
                  <img src={If_pow1} alt="Powder 1" />
                </div>
                <div className="columns col1">
                  <img src={If_pow1} alt="Powder 1" />
                  <img src={If_pow2} alt="Powder" />
                  <img src={leaf1} alt="Leaf 1" />
                </div>
                <h3>
                  Dehydrated leaf powder is produced by drying and grinding
                  various types of edible leaves into a fine powder.
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={rose_poster}
                alt="Rose Poster"
              />
              <div className="rows">
                <div className="columns">
                  <img src={rose1} alt="Rose 1" />
                  <img src={rose2} alt="Rose 2" />
                  <img src={rose3} className="col1" />
                </div>
                <div className="columns col1">
                  <img src={rose4} alt="Rose 4" />
                  <img src={rose5} alt="Rose 5" />
                </div>
                <div className="columns col1">
                  <img src={rose6} alt="Rose 6" />
                  <img src={rose7} alt="Rose 7" />
                  <img src={rose8} alt="Rose 8" />
                </div>
                <h3>
                  {" "}
                  Dehydrated rose powder is made by drying and grinding rose
                  petals into a fine powder.
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default GridCategories;

// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Company_logo from "../assets/images/Company_logo.png";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

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

  return (
    <>
      <div className={`container-fluid ${menuOpen ? "menu-open" : ""}`} id="navbar">
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <img src={Company_logo} alt="Company Logo" />
        </Link>

        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li className="dropdown">
              <div className="product-link" onClick={toggleProductDropdown}>
                <Link to="/product">Product</Link>
                <ArrowDropDownIcon onClick={(e) => e.preventDefault()} className={`arrow ${productDropdownOpen ? "open" : ""}`} />
              </div>

              {productDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <h5
                      onClick={() => {
                        handleCategoryClick(["fruit flakes", "fruit powder"]);
                        setMenuOpen(false); // Close the menu when clicked
                      }}
                    >
                      <Link to="/product" state={{ navCategories: ["fruit flakes", "fruit powder"] }}>
                        Dehydrated Fruit Powders & Flakes
                      </Link>
                    </h5>
                  </li>
                  <li>
                    <h5
                      onClick={() => {
                        handleCategoryClick(["vegetable powder"]);
                        setMenuOpen(false);
                      }}
                    >
                      <Link to="/product" state={{ navCategories: ["vegetable powder"] }}>
                        Dehydrated Vegetable Powders & Flakes
                      </Link>
                    </h5>
                  </li>
                  <li>
                    <h5
                      onClick={() => {
                        handleCategoryClick(["leaf powder","leaf flakes"]);
                        setMenuOpen(false);
                      }}
                    >
                      <Link to="/product" state={{ navCategories: ["leaf powder","leaf flakes"] }}>
                        Dehydrated Leaf Powders & Flakes
                      </Link>
                    </h5>
                  </li>
                  <li>
                    <h5
                      onClick={() => {
                        handleCategoryClick(["rose"]);
                        setMenuOpen(false);
                      }}
                    >
                      <Link to="/product" state={{ navCategories: ["rose"] }}>
                        Dehydrated Rose Powders & Flakes
                      </Link>
                    </h5>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div id="hamburger" onClick={toggleMenu}>
          <div className="social-media">
            <a href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@ShreeHariGlobalFoods" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
            <a href="https://wa.me/7338490894" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
          </div>
          <div>☰</div>
        </div>

        <div className="social-media d-none d-md-inline">
          <a href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/@ShreeHariGlobalFoods" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
          <a href="https://wa.me/7338490894" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
        </div>

        {menuOpen && <div className="blurred-image"></div>}
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;

import "./styles.css";
import React from "react";
import { useMediaQuery } from 'react-responsive'

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import HomeComponent from "./components/HomeComponent"
import ProductsComponent from "./components/ProductComponent"
import ServiceComponent from "./components/ServiceComponent";
import AboutusComponent from "./components/AboutComponent";
export default function App() {



  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul
            style={{
              width: "100%",
              height: 24,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li style={{ position: "absolute", left: 20 }}>
              <Link activeClass="active" smooth spy to="about">
                <img src="logo.png" style={{ width: 32, height: 32 }} />
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="about">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="product">
                Products
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                About us
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                Contact us
              </Link>
            </li>
            <li style={{ position: "absolute", right: 32 }}>
              {/* <Link activeClass="active" smooth spy to="about" > */}
              <img src="shopping.png" style={{ width: 24, height: 24 }} />
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ marginTop: 0 }}>
        <a
          style={{ marginRight: 32 }}
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" style={{ width: 24 }} />
        </a>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" style={{ width: 24 }} />
        </a>
        <a
          style={{ marginLeft: 32 }}
          href="https://wwww.twitter.com"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" style={{ width: 24 }} />
        </a>
      </div>

      {/* <div className="home-page" id="about" style={{marginTop:24}}>
    
      
      <img src="banner.png" style={{width:"100%",position:"absolute", left:0,resize:"cover"}}/>
      
      </div> */}

      <div className="banner-contents" style={{marginTop:32}} id="about">
        <HomeComponent/>
      </div>
      <div className="product-page" id="product">
        <ProductsComponent/>
       
      </div>
      <div className="service-page" id="projects">
         <ServiceComponent/>
      </div>

      <div className={"About-page"} id="blog">
        <AboutusComponent/>
        </div>
      <section id="contact">CONTACT ME</section>
    </div>
  );
}

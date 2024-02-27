import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import "./Home.css";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

const Home = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-sections">
        <div className="left">
          <img src={logo1} alt="Logo1" className="logo1" />
        </div>
        <div className="right">
          <div className="right-header">
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
          </div>
          <div className="right-middle">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={logo2} alt="Logo2" className="logo2" />
          </div>

          <div className="right-footer">
            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="middle-sections">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={logo3} alt="Logo3" className="logo3" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr className="separator" />
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p className="centered">
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS PHARMA
          <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP{" "}
          <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING{" "}
          <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL &
          REFINERIES <span>|</span> SOLAR BUILDING HVAC FIRE FIGHTING{" "}
          <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="footer-sections">
        <div>
          <a href="tel:+1800 200 1234" className="footer-link">
            <IoIosCall className="icon" />
            <span className="text">Toll free: 1800 200 1234</span>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/cripusmps" className="footer-link">
            <FaFacebook className="icon" />
            <span className="text">www.facebook.com/cripusmps</span>
          </a>
        </div>
        <div>
          <a href="https://www.crigroups.com" className="footer-link">
            <TbWorld className="icon" />
            <span className="text"> www.crigroups.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

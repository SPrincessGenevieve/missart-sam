import React, { useState, useEffect } from "react";
import Navbar from "../../NavbarPublic";
import { useNavigate } from "react-router-dom";
import "./Styles/home.css";
import BG from "./../../assets/Clouds.mp4";
import { Button } from "@mui/material";
import ButtonComponent from "./../../components/ButtonComponent";
import zIndex from "@mui/material/styles/zIndex";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import InputText from "../../components/InputText";
import InputSelect from "../../components/InputSelect";

function Home(props) {
  const navigation = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [fadeInput, setFadeInput] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [terms, setTerms] = useState(false);
  const [formData, setFormData] = useState({
    ID: "",
    NAME: "",
    DATE: "",
    DUE: "",
    FEE: "",
    CONTACT_NO: "",
    EMAIL: "",
    STATUS: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "EMAIL") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailPattern.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = () => {
    navigation("/list");
  };

  const handleForm = () => {
    navigation("/form");
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
    setTimeout(() => {
      setShowButton(true);
    }, 800);

    setTimeout(() => {
      setFadeInput(true);
    }, 800);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <div className="home-subcontainer">
          <div
            className={`input-container-home ${fadeInput ? "fade-input" : ""}`}
          >
            <InputText
              width={"35vh"}
              marginRight={"5%"}
              label={"NAME"}
              height={30}
              type="text"
              name="NAME"
              value={formData.NAME}
              onChange={handleInputChange}
            ></InputText>
            <InputText
              width={"35vh"}
              height={30}
              label={"DATE TODAY"}
              type="date"
              name="DATE"
              value={formData.DATE}
              onChange={handleInputChange}
            ></InputText>
            <InputText
              width={"35vh"}
              marginRight={"5%"}
              height={30}
              label={"DUE DATE"}
              type="date"
              name="DUE"
              value={formData.DUE}
              onChange={handleInputChange}
            ></InputText>
            <InputText
              width={"35vh"}
              height={30}
              label={"PAYMENT FEE"}
              type="number"
              name="FEE"
              value={formData.FEE}
              onChange={handleInputChange}
            ></InputText>
            <InputText
              width={"35vh"}
              marginRight={"5%"}
              height={30}
              label={"CONTACT"}
              type="number"
              name="CONTACT_NO"
              value={formData.CONTACT_NO}
              onChange={handleInputChange}
            ></InputText>
            <InputText
              width={"35vh"}
              height={30}
              label={"EMAIL"}
              type="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleInputChange}
            ></InputText>
            <InputSelect
              width={"38vh"}
              height={50}
              label={"STATUS"}
              type="select"
              name="STATUS"
              value={formData.STATUS}
              onChange={handleInputChange}
            ></InputSelect>
          </div>
          <div
            className={`button-container ${showButton ? "fade-button" : ""}`}
          >
            <ButtonComponent
              zIndex={1}
              text="BOOK NOW"
              onClick={handleForm}
              backgroundColor={"white"}
            ></ButtonComponent>
          </div>
          <div className={`video-container ${fadeIn ? "fade-in" : ""}`}>
            <video
              loop
              autoPlay
              muted // Add this attribute
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <source src={BG} type="video/mp4"></source>
            </video>
          </div>
          <div
            className={`link-container-home ${showButton ? "fade-button" : ""}`}
          >
            <a
              className="link"
              href="https://www.instagram.com/missartarchive/"
            >
              <Instagram></Instagram>@missartarchive
            </a>
            <a
              className="link"
              href="https://web.facebook.com/MissArtCommission"
            >
              <Facebook></Facebook>@missartcommission
            </a>
            <a className="link" href="https://twitter.com/MissARTarchive">
              <Twitter></Twitter>@missartarchive
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

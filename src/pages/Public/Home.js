import React, { useState, useEffect } from "react";
import Navbar from "../../NavbarPublic";
import { useNavigate } from "react-router-dom";
import "./Styles/home.css";
import BG from "./../../assets/Clouds.mp4";
import ButtonComponent from "./../../components/ButtonComponent";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import InputText from "../../components/InputText";
import InputSelect from "../../components/InputSelect";
import axios from "axios";
import "./../../components/Styles/TermsConditions.css";
import TermsConditions from "../../components/TermsConditions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function Home(props) {
  const navigation = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [fadeInput, setFadeInput] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [terms, setTerms] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  const checkFormCompletion = () => {
    if (
      !formData.NAME ||
      !formData.DATE ||
      !formData.DUE ||
      !formData.FEE ||
      !formData.CONTACT_NO ||
      !formData.EMAIL ||
      !formData.STATUS
    ) {
      alert("Please fill out all fields");
      return;
    } else {
      setTerms(!terms);
      openModal();
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (
      !formData.NAME ||
      !formData.DATE ||
      !formData.DUE ||
      !formData.FEE ||
      !formData.CONTACT_NO ||
      !formData.EMAIL ||
      !formData.STATUS
    ) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://commission.pythonanywhere.com/api/formtasks/",
        formData
      );
      console.log("Response from Django API:", response.data);

      setFormData({
        NAME: "",
        DATE: "",
        DUE: "",
        FEE: "",
        CONTACT_NO: "",
        EMAIL: "",
        STATUS: "",
      });
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }

    setTerms(!terms);
    alert("Success! We will contact you soon!");
    closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.NAME ||
      !formData.DATE ||
      !formData.DUE ||
      !formData.FEE ||
      !formData.CONTACT_NO ||
      !formData.EMAIL ||
      !formData.STATUS
    ) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://commission.pythonanywhere.com/api/formtasks/",
        formData
      );
      console.log("Response from Django API:", response.data);

      setFormData({
        NAME: "",
        DATE: "",
        DUE: "",
        FEE: "",
        CONTACT_NO: "",
        EMAIL: "",
        STATUS: "",
      });
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }

    setTerms(!terms);
    alert("Success! We will contact you soon!");
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
          <Dialog
            open={modalOpen}
            onClose={closeModal}
            sx={{
              "& .MuiDialog-paper": {
                minWidth: "50%",
                minHeight: "40%",
              },
            }}
          >
            <DialogTitle>Terms of Services</DialogTitle>
            <DialogContent>
              <p className="terms-agrement">
                Clients have the option to choose between a 50% downpayment or
                full upfront payment once the sketch is approved. Please note
                that refunds or cancellations are not permitted after payment
                has been made. The turnaround time for completing artwork is
                dependent on the complexity of the requested art, and pricing
                may vary accordingly. The finished artwork will be delivered via
                email. Additional charges apply for extra characters at $5 or
                Php 250, while flat backgrounds are provided free of charge,
                with a $3 fee for detailed backgrounds. To ensure a smooth
                process, it's essential to read and comprehend these terms of
                service. Begin by contacting us via Twitter, Facebook, or
                Instagram, and provide clear references along with a detailed
                description of your request. Upon confirmation of all details,
                you can proceed with either an upfront payment or a 50%
                downpayment of the total price. We will commence work upon
                payment receipt. Prior to coloring, rough sketches will be
                submitted for your approval, with only one revision permitted.
                We will keep you informed with periodic updates on the progress
                of your commission. Once the commission is finalized, a PNG file
                will be sent to you via email.
              </p>
              <p>
                By clicking proceed you have agreed to the terms of services
              </p>
              <div>
                <h3>You can follow and contact us on:</h3>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={closeModal} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmitMessage} color="primary">
                PROCEED
              </Button>
            </DialogActions>
          </Dialog>
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
            <div className="buttons-container">
              <ButtonComponent
                onClick={checkFormCompletion}
                text="SUBMIT"
                backgroundColor={"#FFECEC"}
              ></ButtonComponent>
            </div>
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

import React, { useState, useEffect } from "react";
import "./Styles/galleryPublic.css";
import "./Styles/font.css";
import axios from "axios";
import NavbarPublic from "./../../NavbarPublic";
import GalleryContainer from "../../components/GalleryContainer";

function GalleryPublic(props) {
  const [images, setImages] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  useEffect(() => {
    axios
      .get("https://commission.pythonanywhere.com/api/photos/tasks/")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div>
      <NavbarPublic />
      <div className="gallery-container-public">
        <div className="gallery-subcontainer-public">
          <div className={`welcome ${fadeIn ? "fade-in" : ""}`}>
            <h1 className="welcome-text">Welcome to the Gallery</h1>
          </div>

          <div
            style={{
              marginTop: 50,
              display: "flex",
              width: "100%",
              flex: 1,
            }}
          >
            <GalleryContainer images={images} showButtons={false} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPublic;

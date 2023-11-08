import React, { useState, useEffect } from "react";
import NavbarPrivate from "../../Navbar";
import "./Styles/galleryPrivate.css";
import GalleryContainerPrivate from "./../../components/GalleryContainerPrivate";
function GalleryPrivate(props) {
  return (
    <div>
      <NavbarPrivate></NavbarPrivate>
      <div className="gallery-container-private">
        <div className="gallery-subcontainer-private">
          <GalleryContainerPrivate></GalleryContainerPrivate>
        </div>
      </div>
    </div>
  );
}

export default GalleryPrivate;

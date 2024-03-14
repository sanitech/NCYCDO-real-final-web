import React from "react";
import { galleryData } from "../../Data/Data";
import GalleryHero from "../../Components/Gallery/GalleryHero";
import GalleryMous from "../../Components/Gallery/GalleryMous";
import GalleryMasonry from "../../Components/Gallery/GalleryMasonry";

function Gallery() {
  return (
    <div>
      <GalleryHero />
      <GalleryMasonry />
    </div>
  );
}

export default Gallery;

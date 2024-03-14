import React from "react";
import { galleryData } from "../../Data/Data";

function GalleryMous() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryData.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={item.image}
              alt={`gallery-photo-${index}`}
            />
            {/* Optionally, display descriptions */}
            {/* <p>{item.desc}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryMous;

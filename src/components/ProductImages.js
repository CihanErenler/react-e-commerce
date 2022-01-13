import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="w-full pb-24">
      <div className="min-w-[320px] h-[400px] max-w-md rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={images[currentImage].thumbnails.large.url}
          alt="images"
        />
      </div>
      <div className="flex mt-2 justify-between max-w-md">
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className={
                currentImage === index
                  ? `w-20 h-20 cursor-pointer shadow-[0_0_0_4px_rgb(235,128,52)] z-10 rounded-lg overflow-hidden`
                  : `w-20 h-20 cursor-pointer rounded-lg overflow-hidden`
              }
              onClick={() => setCurrentImage(index)}
            >
              <img
                className="w-full h-full object-cover"
                src={image.thumbnails.large.url}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;

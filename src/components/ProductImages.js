import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="w-full">
      <div className="min-w-[320px] h-[300px] max-w-md">
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
                  ? `w-20 h-20 cursor-pointer shadow-[0_0_0_4px_rgb(235,128,52)]`
                  : `w-20 h-20 cursor-pointer`
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

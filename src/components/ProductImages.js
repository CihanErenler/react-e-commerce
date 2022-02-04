import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="w-full md:pb-24 pb-4">
      <div className="min-w-full md:min-w-[320px] h-[400px] max-w-md rounded-lg overflow-hidden">
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
                  ? `h-16 w-16 md:h-16 xl:w-20 xl:h-20 cursor-pointer shadow-[0_0_0_4px_rgb(235,168,52)] z-10 rounded-lg overflow-hidden`
                  : `w-16 h-16 xl:w-20 xl:h-20 cursor-pointer rounded-lg overflow-hidden`
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

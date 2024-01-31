import React, { useState } from "react";
import offer1 from "../assets/offers/offer1.jpg";
import offer2 from "../assets/offers/offer2.jpg";
import offer3 from "../assets/offers/offer3.jpg";
import offer4 from "../assets/offers/offer4.jpg";
import offer5 from "../assets/offers/offer5.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? offerImages.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === offerImages.length - 1 ? 0 : prevImage + 1
    );
  };

  const offerImages = [offer1, offer2, offer3, offer4, offer5];

  const transformStyle = {
    transform: `translateX(-${currentImage * (100 / 1.25)}%)`,
  };
  return (
    <>
      <div className="home-carousel flex " style={transformStyle}>
        {offerImages.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      <button className="home-prev-btn left-2.5" onClick={prevImage}>
        &lt;
      </button>
      <button
        className="home-next-btn right-2.5 text-blue-950"
        onClick={nextImage}
      >
        &gt;
      </button>
    </>
  );
};

export default Carousel;

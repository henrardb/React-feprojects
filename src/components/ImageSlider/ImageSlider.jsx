import { useState, useEffect } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ siteUrl, page, limit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);

  async function fetchImages(url) {
    // console.log("fetchImage !");
    setIsLoading(true);

    try {
      const constructedUrl = `${url}${page}&limit=${limit}`;
      // console.log("ConstructedUrl: ", constructedUrl);
      const response = await fetch(constructedUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
        setIsLoading(false);
        // console.log("Image fetched !");
      }
    } catch (e) {
      setErrorMsg(e.message);
      setIsLoading(false);
      // console.log(`fetchImage error: ${e.message}`);
    }
  }

  useEffect(() => {
    if (siteUrl !== "") {
      fetchImages(siteUrl);
    }
  }, [siteUrl]);

  function handleLeft() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleRight() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="content">
      <BsArrowLeftCircleFill
        className="arrows arrows-left"
        onClick={handleLeft}
      />
      {isLoading ? (
        <div>Pictures are loading...</div>
      ) : (
        images.map((imageInfo, index) => (
          <img
            src={imageInfo.download_url}
            alt={imageInfo.download_url}
            className={
              index === currentSlide
                ? "current-image"
                : "current-image hide-current-image"
            }
          ></img>
        ))
      )}
      <BsArrowRightCircleFill
        className="arrows arrows-right"
        onClick={handleRight}
      />
    </div>
  );
}

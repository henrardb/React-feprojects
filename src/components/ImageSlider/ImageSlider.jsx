import { useState, useEffect } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ siteUrl, page, limit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);

  async function fetchImages() {
    // console.log("fetchImage !");
    setIsLoading(true);

    try {
      const constructedUrl = `${siteUrl}${page}&limit=${limit}`;
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
      fetchImages();
    }
  }, [siteUrl]);

  return (
    <div className="content">
      {isLoading ? (
        <div>Pictures are loading...</div>
      ) : (
        images.map((imageInfo, index) => (
          <img src={imageInfo.download_url}></img>
        ))
      )}
    </div>
  );
}

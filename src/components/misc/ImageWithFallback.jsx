import { useEffect, useState } from "react";

const ImageWithFallback = ({
  imgSrc,
  alt,
  width = "100%",
  height = "auto",
  marginLeft = 0,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleError = (e) => {
    e.currentTarget.onerror = null;
    const newSrc = imgSrc;
    e.currentTarget.src = newSrc.replace("webp", "gif");
  };

  return (
    <>
      <div
        className={`loading-image ${loaded ? "hidden" : ""}`}
        style={{ width: width, height: height, marginLeft: marginLeft }}
      >
        <div className="spinner"></div>
      </div>
      <img
        src={imgSrc}
        alt={alt}
        className={`full ${loaded ? "visible" : "hidden"}`}
        onLoad={() => setLoaded(true)}
        onError={(e) => handleError(e)}
      />
    </>
  );
};

export default ImageWithFallback;

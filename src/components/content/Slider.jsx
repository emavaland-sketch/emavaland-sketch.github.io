import { useState, useRef, useEffect } from "react";
import SliderArrows from "./SliderArrows";
import ImageWithFallback from "../misc/ImageWithFallback";

const Slider = ({ data, switchAll }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentSideIndex, setCurrentSideIndex] = useState(currentIndex * 3);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 1 && newIndex <= data.mainImageCount) {
      setCurrentIndex(newIndex);
      setCurrentSideIndex((newIndex - 1) * 3 + 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * 524
      }px)`;
    }
  }, [currentIndex]);

  return (
    <>
      <div className={`images-sidebar ${switchAll ? "desktop" : ""}`}>
        {[...Array(3)].map((_, i) => (
          <ImageWithFallback
            key={i}
            imgSrc={`/images/${data.id}${
              data.kvadratura
            }/static/Staticna_slika_${
              switchAll ? currentSideIndex + i : i + 1
            }.webp`}
            alt={`Predogled projekta ${data.id}${data.kvadratura}`}
            width="110px"
            height="150px"
          />
        ))}
      </div>
      {switchAll && (
        <div className="images-sidebar mobile">
          {[...Array(data.staticImageCount)].map((_, i) => (
            <ImageWithFallback
              key={i}
              imgSrc={`/images/${data.id}${
                data.kvadratura
              }/static/Staticna_slika_${
                switchAll ? currentSideIndex + i : i + 1
              }.webp`}
              alt={`Predogled projekta ${data.id}${data.kvadratura}`}
              width="110px"
              height="150px"
            />
          ))}
        </div>
      )}

      <div className="images-main">
        <SliderArrows
          currentIndex={currentIndex}
          scroll={scroll}
          maximum={data.mainImageCount - 1}
        />

        <div className="slider" ref={sliderRef}>
          {[...Array(data.mainImageCount)].map((_, i) => (
            <div>
              <ImageWithFallback
                key={i}
                imgSrc={`/images/${data.id}${data.kvadratura}/main/Slika_${
                  i + 1
                }.webp`}
                alt={`Predogled projekta ${data.id}${data.kvadratura}`}
                width="450"
                height="400"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

import { useState, useRef, useEffect } from "react";
import SliderArrows from "./SliderArrows";

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
    console.log(sliderRef.current);
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
          <img
            key={i}
            src={`/images/${data.id}${data.kvadratura}/static/Staticna_slika_${
              switchAll ? currentSideIndex + i : i + 1
            }.webp`}
          />
        ))}
      </div>
      {switchAll && (
        <div className="images-sidebar mobile">
          {[...Array(data.staticImageCount)].map((_, i) => (
            <img
              key={i}
              src={`/images/${data.id}${
                data.kvadratura
              }/static/Staticna_slika_${i + 1}.webp`}
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
              <img
                key={i}
                src={`/images/${data.id}${data.kvadratura}/main/Slika_${
                  i + 1
                }.webp`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `/images/${data.id}${
                    data.kvadratura
                  }/main/Slika_${i + 1}.gif`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

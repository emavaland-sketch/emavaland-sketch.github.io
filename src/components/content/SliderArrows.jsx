const SliderArrows = ({ currentIndex, scroll, maximum }) => {
  return (
    <>
      {currentIndex > 1 && (
        <button onClick={() => scroll(-1)} className="arrow left"></button>
      )}
      {currentIndex < maximum && (
        <button onClick={() => scroll(1)} className="arrow right"></button>
      )}
    </>
  );
};

export default SliderArrows;

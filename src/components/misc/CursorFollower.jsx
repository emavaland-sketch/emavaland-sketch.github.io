import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const circleX = useRef(0);
  const circleY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Black dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(
          ${e.clientX - 4}px,
          ${e.clientY - 4}px
        )`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const animate = () => {
      const ease = 0.12;

      circleX.current += (mouseX.current - circleX.current) * ease;
      circleY.current += (mouseY.current - circleY.current) * ease;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(
          ${circleX.current - 25}px,
          ${circleY.current - 25}px
        )`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cursor-follower">
      {/* Orange delayed follower */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#b8592e",
          pointerEvents: "none",
          zIndex: -1,
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Black dot cursor */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "4px",
          height: "4px",
          background: "black",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999999,
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

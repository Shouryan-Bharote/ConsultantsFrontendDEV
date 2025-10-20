import React, { useState, useEffect, useRef } from "react";
import "./TrainingMemories.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SplitText from "../reactbit/splitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

// --- Data Structure ---
const imageSets = [
  // Set 1 (9 images)
  [
    { id: 1, src: "src/assets/images/m1.jpeg", alt: "Image 1" },
    { id: 2, src: "src/assets/images/m2.jpeg", alt: "Image 2" },
    { id: 3, src: "src/assets/images/m3.jpeg", alt: "Image 3" },
    { id: 4, src: "src/assets/images/m4.jpeg", alt: "Image 4" },
    { id: 5, src: "src/assets/images/m5.jpeg", alt: "Image 5" },
    { id: 6, src: "src/assets/images/m6.jpeg", alt: "Image 6" },
    { id: 7, src: "src/assets/images/m7.jpeg", alt: "Image 7" },
    { id: 8, src: "src/assets/images/m8.jpeg", alt: "Image 8" },
    { id: 9, src: "src/assets/images/m9.jpeg", alt: "Image 9" },
  ],
  // Set 2 (9 images)
  [
    { id: 10, src: "src/assets/images/m10.jpeg", alt: "Image 10" },
    { id: 11, src: "src/assets/images/m11.jpeg", alt: "Image 11" },
    { id: 12, src: "src/assets/images/m12.jpeg", alt: "Image 12" },
    { id: 13, src: "src/assets/images/m13.jpeg", alt: "Image 13" },
    { id: 14, src: "src/assets/images/m14.jpeg", alt: "Image 14" },
    { id: 15, src: "src/assets/images/m15.jpeg", alt: "Image 15" },
    { id: 16, src: "src/assets/images/m16.jpeg", alt: "Image 16" },
    { id: 17, src: "src/assets/images/m17.jpeg", alt: "Image 17" },
    { id: 18, src: "src/assets/images/m18.jpeg", alt: "Image 18" },
  ],
];

const TrainingMemories = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Refs for the scrolling rows
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  // Split images into three rows
  const imagesInCurrentSet = imageSets[currentSetIndex];
  const rowImages1 = imagesInCurrentSet.slice(0, 3);
  const rowImages2 = imagesInCurrentSet.slice(3, 6);
  const rowImages3 = imagesInCurrentSet.slice(6, 9);

  // Duplicate images for infinite scroll effect
  const duplicatedRow1 = [...rowImages1, ...rowImages1];
  const duplicatedRow2 = [...rowImages2, ...rowImages2];
  const duplicatedRow3 = [...rowImages3, ...rowImages3];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect for automatic scrolling on mobile
  useEffect(() => {
    if (!isMobile) return;

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const row3 = row3Ref.current;

    if (!row1 || !row2 || !row3) return;

    const scrollSpeed = 0.5;
    let animationFrameId;

    // Set initial scroll position for the backward-scrolling row
    row2.scrollLeft = row2.scrollWidth / 2;

    const animateScroll = () => {
      // Forward scroll (left to right)
      row1.scrollLeft += scrollSpeed;
      if (row1.scrollLeft >= row1.scrollWidth / 2) {
        row1.scrollLeft = 0;
      }

      row3.scrollLeft += scrollSpeed;
      if (row3.scrollLeft >= row3.scrollWidth / 2) {
        row3.scrollLeft = 0;
      }

      // Backward scroll (right to left)
      row2.scrollLeft -= scrollSpeed;
      if (row2.scrollLeft <= 0) {
        row2.scrollLeft = row2.scrollWidth / 2;
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start the animation
    animateScroll();

    // Cleanup function to cancel the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile, currentSetIndex]); // Rerun when switching to mobile or changing image set

  const handleAnimation = (newIndex, currentDirection) => {
    setIsTransitioning(true);
    setDirection(currentDirection);

    const animationDuration = 500;
    setTimeout(() => {
      setCurrentSetIndex(newIndex);
      setIsTransitioning(false);
      setDirection("");
    }, animationDuration);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    const newIndex = (currentSetIndex + 1) % imageSets.length;
    handleAnimation(newIndex, "next");
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    const newIndex =
      (currentSetIndex - 1 + imageSets.length) % imageSets.length;
    handleAnimation(newIndex, "prev");
  };

  const gridClasses = `grid-container ${
    isTransitioning ? "transitioning" : ""
  } ${isTransitioning ? direction : ""}`;

  return (
    <section className="container">
      <div className="text">
        <h2>
          <SplitText
            text="Training Memories"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h2>
      </div>

      {/* RENDER GRID OR SCROLLER BASED ON isMobile STATE */}
      {isMobile ? (
        <div className="mobile-scrolling-container">
          <div ref={row1Ref} className="scrolling-row">
            {duplicatedRow1.map((image, index) => (
              <img
                key={`${image.id}-${index}`}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <div ref={row2Ref} className="scrolling-row">
            {duplicatedRow2.map((image, index) => (
              <img
                key={`${image.id}-${index}`}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <div ref={row3Ref} className="scrolling-row">
            {duplicatedRow3.map((image, index) => (
              <img
                key={`${image.id}-${index}`}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={gridClasses}>
          {imagesInCurrentSet.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="arrow-buttons">
        <button onClick={handlePrev} disabled={isTransitioning} class="btn">
          &larr;
        </button>
        <button onClick={handleNext} disabled={isTransitioning} class="btn">
          {" "}
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default TrainingMemories;

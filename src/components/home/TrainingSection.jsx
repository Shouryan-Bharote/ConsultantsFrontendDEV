import React, { useState, useLayoutEffect } from 'react';
import './TrainingSection.css';
import next_icon from '../../assets/images/next-icon.png';
import back_icon from '../../assets/images/back-icon.png';

const CARD_COUNT = 4;

const TrainingSection = () => {
  const [tx, setTx] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // --- Viewport Listener ---
  useLayoutEffect(() => {
    // Check if window is defined (for SSR safety, though unlikely in a typical React app)
    if (typeof window !== 'undefined') {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    return () => {};
  }, []);

  // --- Dynamic Calculations ---
  const getVisibleCards = () => {
    if (viewportWidth <= 480) return 1;    // Mobile: 1 card visible
    if (viewportWidth <= 768) return 2;    // Tablet: 2 cards visible
    return 3;                              // Desktop: 3 cards visible
  };

  const VISIBLE_CARDS = getVisibleCards();

  // The step is 100% divided by the total cards (25%)
  const slideStep = 100 / CARD_COUNT; 

  // Maximum percentage to scroll
  const MAX_SCROLLABLE_PERCENT = (CARD_COUNT - VISIBLE_CARDS) * slideStep;
  const MAX_SCROLLABLE_LIMIT = -MAX_SCROLLABLE_PERCENT;

  // The actual amount to move on click (1 card width = 25%)
  const moveAmount = slideStep;
  
  // Total pages needed for navigation
  const totalPages = CARD_COUNT - VISIBLE_CARDS + 1;
  
  // Current index (page) based on the translation state (tx)
  const currentIndex = Math.min(
    Math.round(Math.abs(tx) / moveAmount),
    totalPages - 1
  );

  // --- Sliding Functions ---
  const slideForward = () => {
    if (tx > MAX_SCROLLABLE_LIMIT) {
      setTx(prevTx => Math.max(prevTx - moveAmount, MAX_SCROLLABLE_LIMIT));
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(prevTx => Math.min(prevTx + moveAmount, 0));
    }
  };
  
  const goToSlide = (index) => {
      // Calculate the required tx value for that index
      const newTx = -index * moveAmount;
      setTx(newTx);
  };

  // --- Touch/Swipe Handlers (Activate on screens <= 768px) ---

  const handleTouchStart = (e) => {
    if (viewportWidth <= 768) {
      setTouchStart(e.targetTouches[0].clientX);
      setTouchEnd(e.targetTouches[0].clientX); 
    }
  };

  const handleTouchMove = (e) => {
    if (viewportWidth <= 768) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (viewportWidth > 768 || touchStart === 0) return;

    const minSwipeDistance = 50; 
    const distance = touchStart - touchEnd; 

    if (distance > minSwipeDistance) {
      slideForward();
    } else if (distance < -minSwipeDistance) {
      slideBackward();
    }
    
    setTouchStart(0); 
    setTouchEnd(0);
  };
  
  // --- Snapping on Resize ---
  // If the view changes (e.g., from desktop to mobile), snap the carousel to the correct limit.
  useLayoutEffect(() => {
    // Ensure tx is within the new bounds [MAX_SCROLLABLE_LIMIT, 0]
    if (tx < MAX_SCROLLABLE_LIMIT) {
      // If we scrolled past the new end limit, snap to the end limit
      setTx(MAX_SCROLLABLE_LIMIT);
    } else if (tx > 0) {
      // Should only happen on initial load or if tx somehow became positive
      setTx(0); 
    }
  }, [viewportWidth, MAX_SCROLLABLE_LIMIT, tx]);


  return (
    <div className='trainings'>
      <h2>High Impact Trainings</h2>
      <p>Lorem ipsum lorem ipsum lorem ipsum</p>

      {/* Navigation buttons */}
      <div className="carousel-nav">
        {/* Disable button when at the start (tx is 0) */}
        <button 
          className='back-btn' 
          onClick={slideBackward} 
          disabled={tx >= 0} 
          aria-label="Previous training card"
        >
            <img src={back_icon} alt="Back" />
        </button>
        {/* Disable button when at the end (tx is at MAX_SCROLLABLE_LIMIT) */}
        <button 
          className='next-btn' 
          onClick={slideForward} 
          disabled={tx <= MAX_SCROLLABLE_LIMIT}
          aria-label="Next training card"
        >
            <img src={next_icon} alt="Next" />
        </button>
      </div>

      <div 
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul style={{ 
            // UL width ensures all 4 LI elements are visible in a row.
            // E.g., Desktop (3 visible): (100 / 3) * 4 = 133.33%
            width: `${(100 / VISIBLE_CARDS) * CARD_COUNT}%`, 
            transform: `translateX(${tx}%)` 
        }}>
          {/* Your 4 list items (training cards) */}
          <li>
            <div className="training-card">
              <h3>Senior Management Level 1</h3>
              <p>dfhafjlkjsfklas asdlfnakjsf asjfajsdflaoijsdkljfklasdsnfdlasd fasskfhnaodsdfa sflkasjdfjkassldkfk</p>
              <button className='info-btn'>Get Info</button>
            </div>
          </li>
          <li>
            <div className="training-card">
              <h3>Senior Management Level 2</h3>
              <p>dfhafjlkjsfklas asdlfnakjsf asjfajsdflaoijsdkljfklasdsnfdlasd fasskfhnaodsdfa sflkasjdfjkassldkfk</p>
              <button className='info-btn'>Get Info</button>
            </div>
          </li>
          <li>
            <div className="training-card">
              <h3>Senior Management Level 3</h3>
              <p>dfhafjlkjsfklas asdlfnakjsf asjfajsdflaoijsdkljfklasdsnfdlasd fasskfhnaodsdfa sflkasjdfjkassldkfk</p>
              <button className='info-btn'>Get Info</button>
            </div>
          </li>
          <li>
            <div className="training-card">
              <h3>Senior Management Level 4</h3>
              <p>dfhafjlkjsfklas asdlfnakjsf asjfajsdflaoijsdkljfklasdsnfdlasd fasskfhnaodsdfa sflkasjdfjkassldkfk</p>
              <button className='info-btn'>Get Info</button>
            </div>
          </li>
        </ul>
      </div>
      
      {/* Pagination Dots Component (Visible only on mobile via CSS) */}
      {/* Renders dots only if we need more than one page/view */}
      {totalPages > 1 && (
        <div className="carousel-dots-container">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to card view ${index + 1}`}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default TrainingSection;
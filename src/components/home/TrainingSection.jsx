import React, { useState, useLayoutEffect } from 'react';
import './TrainingSection.css';
import next_icon from '../../assets/images/next-icon.png';
import back_icon from '../../assets/images/back-icon.png';

const CARD_COUNT = 4;
const BASE_STEP = 25; 

const TrainingSection = () => {
  const [tx, setTx] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const IsMobile = viewportWidth <= 480;
  const IsTablet = viewportWidth > 480 && viewportWidth <= 767;


  const MAX_SCROLLABLE_LIMIT = -1 * (CARD_COUNT - 1) * BASE_STEP; 

  const slideStep = BASE_STEP; 

  
  const slideForward = () => {
    if (tx > MAX_SCROLLABLE_LIMIT) {
      setTx(prevTx => Math.max(prevTx - slideStep, MAX_SCROLLABLE_LIMIT));
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(prevTx => Math.min(prevTx + slideStep, 0));
    }
  };

  // --- Touch/Swipe Handlers ---

  const handleTouchStart = (e) => {
    if (viewportWidth <= 767) {
      setTouchStart(e.targetTouches[0].clientX);
      setTouchEnd(e.targetTouches[0].clientX); 
    }
  };

  const handleTouchMove = (e) => {
    if (viewportWidth <= 767) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (viewportWidth > 767 || touchStart === 0) return;

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

  return (
    <div className='trainings'>
      <h2>High Impact Trainings</h2>
      <p>Lorem ipsum lorem ipsum lorem ipsum</p>

      {/* Navigation buttons will now work correctly due to the fixed MAX_SCROLLABLE_LIMIT */}
      <div className="carousel-nav">
        <button className='back-btn' onClick={slideBackward}>
            <img src={back_icon} alt="Back" />
        </button>
        <button className='next-btn' onClick={slideForward}>
            <img src={next_icon} alt="Next" />
        </button>
      </div>

      <div 
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul style={{ transform: `translateX(${tx}%)` }}>
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
    </div>
  );
};

export default TrainingSection;
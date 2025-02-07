import React, { useState, useEffect, useRef } from 'react';
import './Count.css';

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1 
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <div ref={elementRef}>{count}+</div>;
};

const Count = () => {
  return (
    <div className='count'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 count-title">
            <span>Datum</span> at a Glance 
          </div>
        </div>
        <div className="row count-container">
          <div className="col-md-3">
            <div>
              <AnimatedNumber end={32} />
            </div>
            <div>
              Technical Team
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <AnimatedNumber end={15} />
            </div>
            <div>
              Management Team
            </div>  
          </div>
          <div className="col-md-3">
            <div>
              <AnimatedNumber end={26} />
            </div>
            <div>
              Design Team
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <AnimatedNumber end={7} />
            </div>
            <div>
              Previous Event
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Count;
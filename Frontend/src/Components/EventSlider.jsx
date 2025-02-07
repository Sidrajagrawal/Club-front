import React, { useState,useRef } from 'react'
import './EventSlider.css';
import img1 from '../Images/img1.jpg';
import img3 from '../Images/img3.jpg';
import img5 from '../Images/img5.png';

const EventSlider = (props) => {
    
    const img_arr = [{img_url:img1,title:"Event 01",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img3,title:"Event 02",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img5,title:"Event 03",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img1,title:"Event 04",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img3,title:"Event 05",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img5,title:"Event 06",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img1,title:"Event 07",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img3,title:"Event 08",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},
        {img_url:img5,title:"Event 09",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat sint, non asperiores ad odio?"},

    ];
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    return (
        <div className={`container-fluid EventDiv kk${props.detail[0].bgcolor}`}>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <span className='upcoming'>{props.detail[0].title}&nbsp;&nbsp;</span>
                        <span className='heading-event'>Events</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 arrow-lft">
                    <div>
                        <button onClick={scrollLeft}>
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-10" ref={scrollRef}>
                    {img_arr.map((item, index) => (
                        <div className="col-md-4 event-card" key={index}>
                            <div className="row" >
                                <div className="col-md-12">
                                    <img 
                                        src={item.img_url} 
                                        alt="Event Img" 
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col-md-12 event-detail ${activeIndex === index ? "d-block" : "d-none"} ${activeIndex === index ? "scrolldown" : ""}`}onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}>
                                    <div className="row" >
                                        <div className="col-md-12">{item.title}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">{item.Description}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button>Know More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-1 arrow-rgt">
                    <div>
                        <button onClick={scrollRight}>
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSlider;
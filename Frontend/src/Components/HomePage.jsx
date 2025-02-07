import React, { useEffect, useState } from 'react'
import './HomePage.css';
import anime1 from '../Videos/anime1.mp4';
import anime2 from '../Videos/anime2.mp4';
import NavBar from './NavBar.jsx';
import ScrollTimeLine from './ScrollTimeLine.jsx';
import AboutDiv from './AboutDiv.jsx';
import Count from './Count.jsx';
import EventSlider from './EventSlider.jsx';
import Footer from './Footer.jsx';
import CopyRightFooter from './CopyRightFooter.jsx';

const HomePage = () => {
    const [activeVideo, setActiveVideo] = useState(anime1);
    const [activeIndex, setActiveIndex] = useState(0);

    const content_arr = [
        {
            title: "<div>Provide Leadership in Machine<br/>Intelligence and Data Science</div>",
            subtitle: "through Education, Research, and Industry Collaboration"
        },
        {
            title: "<div>Specialized Research in</div><div>Artificial Intelligence, Machine</div><div>Learning, and related areas</div>",
            subtitle: ""
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveVideo(prev => prev === anime1 ? anime2 : anime1);
            setActiveIndex(prev => (prev + 1) % content_arr.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="container-fluid frontpage">
                <div className="row">
                    <div className="col-md-12">
                        <NavBar></NavBar>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 content">
                        <div className="video-wrapper">
                            <video
                                className='video-container'
                                src={activeVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                            <div className='overlay-text'>
                                <div
                                    key={`title-${activeIndex}`}
                                    className="slide-text"
                                    dangerouslySetInnerHTML={{ __html: content_arr[activeIndex].title }}
                                />
                                {content_arr[activeIndex].subtitle && (
                                    <div
                                        key={`subtitle-${activeIndex}`}
                                        className="slide-text subtitle"
                                        dangerouslySetInnerHTML={{ __html: content_arr[activeIndex].subtitle }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ScrollTimeLine></ScrollTimeLine>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11">
                        <AboutDiv></AboutDiv>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Count></Count>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventSlider detail={[{title:"Upcoming",bgcolor:''}]}></EventSlider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventSlider detail={[{title:"Previous",bgcolor:'-grey'}]}></EventSlider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 footer-content">
                        <Footer></Footer>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 copy-right-footer">
                    <CopyRightFooter></CopyRightFooter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
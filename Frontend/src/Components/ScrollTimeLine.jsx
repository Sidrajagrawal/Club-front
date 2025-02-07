import React from 'react';
import './ScrollTimeLine.css';

const ScrollTimeLine = () => {
    const scroll_arr = [
        { Date: "13 NOV 2024:", content: "Lorem ipsum dolor sit." },
        { Date: "8 OCT 2024:", content: "Lorem ipsum dolor sit." },
        { Date: "10 Dec 2024:", content: "Lorem ipsum dolor sit." }
    ];

    return (
        <div className="timeline">
            <div className="scroll-container">
                <div className="scroll-content">
                    {scroll_arr.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <h6 className="timeline-date">{item.Date}</h6>
                            <p className="timeline-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScrollTimeLine;

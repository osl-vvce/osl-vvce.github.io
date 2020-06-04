import React from "react";
import banner from "../../static/images/oslx.jpg";

import "../style/events.less";

const Events = () => {
    return (
        <div className="events">
            <div className="text">
                <h1>Upcoming Events</h1>
            </div>
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="eventButton">
                <button className="btn">Register</button>
            </div>
        </div>
    );
};

export default Events;

import React from "react"
import man from "../../img/man.JPG"
import zigzag from "../../img/zigzag.JPG"
import group from "../../img/group.JPG"
import doublePeople from "../../img/doublePeople.JPG"
import doubleIcon from "../../img/doubleIcon.JPG"
import ellipse from "../../img/ellipse.jpg"
import single from "../../img/single.JPG"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Develop  your mobile <span>app</span> skills for a <span>Beta</span> future</h1>
                <p>Provides you with the latest online learning system and material that will help your knowledge grow</p>
                <div className="hero-button-container">
                    <button>Get started</button>
                    <button>Get free trial</button>
                    <button>Contact us</button>
                    
                </div>
                <div className="hero-text-img">
                    <img src={zigzag} alt="doubleIcon" />
                    <img src={doubleIcon} alt="doubleIcon" />
                    <img src={ellipse} alt="ellipse" />
                </div>

            </div>
            <div className="hero-img">
                <img src={man} alt="man" />
                <img src={group} alt="group" />
                <img src={doublePeople} alt="doublePeople" />
                <img src={single} alt="single" />
            </div>
        </div>

    )

}
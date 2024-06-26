import Checkbox from "./Checkbox";
import "./styles/Home.css";
import { useState } from 'react';
import { Carousel } from "./Carousel";
import { slides } from "../data/carouselData.json";
import ReactPlayer from "react-player";
import { useRef } from "react";


function Home({ labelOn, labelOff, }) {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (pillar) => {
        setShowDetails(prevState => ({
            ...prevState,
            [pillar]: !prevState[pillar]
        }));
    };
    const playerRef = useRef(null);
    const handleReady = () => {
        playerRef.current.play;
    };

    return (
        <div className="Home">
            <header className="header0">
                <h1 className="header1"> TrendSphere </h1>
                <main>
                    <ReactPlayer ref={playerRef} url="assets/7334662-hd_1920_1080_24fps.mp4" controls={true} loop={true} onReady={handleReady} />
                </main>
                <h2 className="header2"> The future of fashion design delivered right to your finger tips </h2>
            </header>

            <div className="Pillars">
                <div className="homeDiv1">
                    <img className="puzzleimg" src="/assets/oswald-elsaboath-6xFVjaGtA3M-unsplash.jpg" alt="puzzle"></img>
                    <button className="HomeButton" onClick={() => toggleDetails('who')}>Who We Are</button>
                    {showDetails['who'] && (
                        <p> Our story began with a vision: to create a dynamic platform that seamlessly integrates cutting-edge technology with the artistry of fashion. We're not just a website; we're a destination for trendsetters, tastemakers, and seekers of sartorial innovation.</p>
                    )};
                </div>
                <div className="homeDiv2">
                    <img className="lostimg" src="/assets/jon-tyson-tXsZrKdazDk-unsplash.jpg" alt="lost"></img><br></br>
                    <button className="HomeButton" onClick={() => toggleDetails('why')}>Why We Serve</button>
                    {showDetails['why'] && (
                        <p> Step into our virtual showroom, where curated collections curated by our team of fashion aficionados await. From haute couture to street style, we've curated the latest looks from across the globe, ensuring that you stay ahead of the curve with every purchase.

                            But TrendSphere is more than just a marketplace its a community. Connect with fellow fashion enthusiasts, share style inspiration, and discover emerging designers who are shaping the future of fashion.</p>)}
                </div>
                <div className="homeDiv3">
                    <img className="teamimg" src="/assets/jed-villejo-pumko2FFxY0-unsplash.jpg"></img>
                    <button className="HomeButton" onClick={() => toggleDetails('commitment')}>Commitment</button>
                    {showDetails['commitment'] && (
                        <p> Join us as we navigate the ever-evolving landscape of style, where the boundaries between the physical and digital worlds blur, and fashion becomes a form of self-expression like never before. Welcome to TrendSphere—where the future of fashion awaits.</p>)}
                </div><br></br>
                <div></div>
                <Carousel data={slides} />
            </div>
        <Checkbox labelOn={labelOn} labelOff={labelOff} />
        </div>
    );
}
export default Home;

//My image is not loading write need correct sizing.

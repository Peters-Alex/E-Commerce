// import React from "react";
import NavBar from "./NavBar";
// import { useState } from 'react'
import Checkbox from "./Checkbox";
import Cart from "./Cart";
import "./styles/Home.css";


function Home({labelOn, labelOff,}) { 



    return(
        <div className="Home">
            <Checkbox labelOn={labelOn} labelOff={labelOff}/>
            {/* <NavBar /> */}
            <header>
                <h1> TrendSphere </h1>
                <h2> The future of fashion design delivered right to your finger tips </h2>
            </header>
            <main>
                <section>
                    <img src="src/assets/35187215-D078-4633-AE23-9DD7A0269CF3_1_105_c.jpeg" alt="shopping"></img> 
                </section>
            </main>

            <section>
                <h2>  </h2>
                <ul>
                    <li> Who We Are </li>
                        <p> Our story began with a vision: to create a dynamic platform that seamlessly integrates cutting-edge technology with the artistry of fashion. We're not just a website; we're a destination for trendsetters, tastemakers, and seekers of sartorial innovation.</p>
                    <li> Why We Serve</li>
                        <p> Step into our virtual showroom, where curated collections curated by our team of fashion aficionados await. From haute couture to street style, we've curated the latest looks from across the globe, ensuring that you stay ahead of the curve with every purchase.

                        But TrendSphere is more than just a marketplace—it's a community. Connect with fellow fashion enthusiasts, share style inspiration, and discover emerging designers who are shaping the future of fashion.</p>
                    <li> Our Commitment </li>
                        <p> Join us as we navigate the ever-evolving landscape of style, where the boundaries between the physical and digital worlds blur, and fashion becomes a form of self-expression like never before. Welcome to TrendSphere—where the future of fashion awaits.</p>
                </ul>
            </section>

                
        </div>
)}
export default Home;

//My image is not loading write need correct sizing.

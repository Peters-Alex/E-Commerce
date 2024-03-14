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
            <NavBar />
            <header>
                <h1> Welcome Home </h1>
                <p> The future of Shoping in now</p>
            </header>
            <main>
                <section>
                    <img src="/shopping.jpg" alt="shopping" />
                </section>
            </main>

            <section>
                <h2> Items of the week </h2>
                <ul>
                    <li> Who We Are </li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa debitis dignissimos quo neque aliquid unde. Soluta, minima nemo illo iusto quos laborum, laudantium officiis dolor quae omnis explicabo est.</p>
                    <li> Why We Serve</li>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sed maxime assumenda tempore dolore asperiores quaerat porro unde, est harum odio suscipit repellendus ratione, perferendis reiciendis quibusdam quia voluptatibus soluta.</p>
                    <li> Our Commitment </li>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe eos quia incidunt at unde, et sed quasi. Eveniet nisi doloribus molestiae. Repellendus unde aliquid esse suscipit provident ea deserunt.</p>
                </ul>
            </section>

                
        </div>
)}
export default Home;

//My image is not loading write need correct sizing.

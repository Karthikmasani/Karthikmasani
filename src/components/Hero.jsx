import React from "react";
import "./Hero.css"
import shoes from "./images/shoes.png"
import flipkart from "./images/flipkart.png"
import amazon from "./images/amazon.png"

const HeroSection = () =>{

    return (
        <>
            <div className="container">
        <div class="row">
            <div class="col">
                <div className="main-container">
                <div className="title">
                    <h1 className="head">A SHOE HAS SO MUCH MORE TO OFFER THAN JUST TO WALK</h1>
                    <p className="head second_head">A journey of a thousand miles begins with a fabulous pair of shoes.</p>
                </div>
                <div className="hero-btn">
                    <button className="first_btn">Shop Now</button>
                    <button className='secondary-btn'>Category</button> 
                </div>
                <p className="descripition">Also Available on </p>
                <div className="brand-icons">
                    <img src={flipkart} alt="flipkart" className='flipcart'/>
                    <img src={amazon} alt="amazon" className='amazon'/>
                </div>
                </div>
            </div>
            <div class="col">
                <div className="hero-image">
                    <img src={shoes} alt="shoes" />
                </div>
            </div>
            
        </div>
    </div>
        </>
    )


}

export default HeroSection
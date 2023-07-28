import React from "react";
import "./Hero.css"

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
                    <img src="/images/flipkart.png" alt="flipkart" className='flipcart'/>
                    <img src="/images/amazon.png" alt="amazon" className='amazon'/>
                </div>
                </div>
            </div>
            <div class="col">
                <div className="hero-image">
                    <img src="/images/shoes.png" alt="shoes" />
                </div>
            </div>
            
        </div>
    </div>
        </>
    )


}

export default HeroSection
import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div>
            <div className='carousel-container'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://www.businesstoday.com.my/wp-content/uploads/2023/12/What-is-Artiificial-IntelligenceAI.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_Cases_for_Cyber_Security.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://uploads-ssl.webflow.com/611b8930015cb4be59160e08/61a5e221adc0d6298f9add5d_machinelearning.jpeg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="https://d2ms8rpfqc4h24.cloudfront.net/mobile_application_development_ad3f711b7d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="https://computerenotes.com/wp-content/uploads/2023/11/se.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <h3>
                    To check out our latest courses :
                    <Link to='/courses'>
                        <button className="btn btn-ghost">Click here </button>
                    </Link>
                </h3>
            </div>
            
        </div>
    );
};

export default Home;
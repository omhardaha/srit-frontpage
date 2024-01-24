import React from 'react'
import "./Car.css"

const Car = () => {
    return (
        <div>
            <div style={{"marginLeft":"17px","marginRight":"17px","marginTop":"70px","marginBottom":"70px"}} className="carousel ">
                <ul className="slides">
                    <input type="radio" name="radio-buttons" id="img-1" checked />
                    <li className="slide-container">
                        <div className="slide-image">
                            <img style={{"borderRadius":"0"}} src="https://scontent.fjlr3-1.fna.fbcdn.net/v/t39.30808-6/294682062_2361535773999866_4640809090485555832_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=48nlHZNN4lcAX-3HzJr&_nc_ht=scontent.fjlr3-1.fna&oh=00_AfDKevJEwB49H8usz8i-_YAlP5jE-ZQuoP2T1eNeSnrm-Q&oe=65B5A475" alt="Image 1" />
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor=" -3" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-2" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-2" />
                    <li className="slide-container">
                        <div className="slide-image">
                            <img style={{"borderRadius":"0"}} src="https://content3.jdmagicbox.com/comp/jabalpur/l8/9999px761.x761.140724143911.q3l8/catalogue/shri-ram-institute-of-technology-jabalpur-city-jabalpur-engineering-colleges-j473vtx2g8.jpg" alt="Image 2" />
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor="img-1" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-3" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-3" />
                    <li className="slide-container">
                        <div className="slide-image">
                            <img style={{"borderRadius":"0"}} src="https://lh3.googleusercontent.com/proxy/a8jgunQRbKVTQaM_BIGRIkmcLvrbgI_328SnAA91ZPxxc9pHb2G3iar-K7Yc7LtkNpl0eDlj7AoXjQ-CK71wpU64ZWVmr99DInddhP4" alt="Image 3" />
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor="img-2" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-1" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel-dots">
                        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Car
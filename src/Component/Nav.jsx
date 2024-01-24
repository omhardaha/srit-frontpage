import React, { useEffect } from 'react'
import "./Nav.css"


const Nav = () => {
 
    
    return (
        <>
            <div className="container-fluid main">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">SHRIRAM GROUP</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div style={{"margin":"0"}} id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner" role="listbox">
                        <div style={{"width":"100%"}} className="item active background a"></div>
                        <div className="item background b"></div>
                        <div className="item background c"></div>
                    </div>
                </div>

                <div className="covertext">
                    <div className="col-lg-10" style={{ float: 'none', margin: '0 auto' }}>
                        <h1 className="title">SHRI RAM GROUP</h1>
                        <h3 className="subtitle">BEST ENGINEERING COLLEGE IN JABALPUR</h3>
                    </div>
                    <div className="col-xs-12 explore">
                        <a href="#"><button type="button" className="btn btn-lg explorebtn">EXPLORE</button></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav;
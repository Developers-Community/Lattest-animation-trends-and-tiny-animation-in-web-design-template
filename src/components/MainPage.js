import React, { useEffect } from 'react'
import ClientBeloved from './ClientBeloved'
import ContactUs from './ContactUs'
import Footer from './Footer'
import HomeAnimation from './HomeAnimation'
import LattestNews from './LattestNews'
import Navbar from './Navbar'
import Parallax from './Parallax'
import Portfolio from './Portfolio'
import Profile from './Profile'
import ServicesCard from './ServicesCard'
import TeamAndCounter from './TeamAndCounter'
import { working, counterWorking } from './working'

const MainPage = () => {
    working()
    // counterWorking()



    return (
        <div >
            <div id="preloader">
                <div id="status">&nbsp;</div>
            </div>
            <HomeAnimation />
            <div id="cbp-so-scroller" className="cbp-so-scroller">
                <Navbar />
                <Profile />
                <Parallax />
                <TeamAndCounter />
                <ServicesCard />
                <ClientBeloved />
                <Portfolio />
                {/* <LattestNews /> */}
                <ContactUs />
                <Footer />
                {/* <div id="parallax-1" className="parallax" style={{ backgroundImage: 'url(images/parallax-1.jpg)' }}>
                    <div className="parallax-wrap">
                        <div className="container">
                            <div className="sixteen columns">
                                <h5><span>Our Latest Flickr Shots</span></h5>
                            </div>
                            <div className="sixteen columns">
                                <div id="flkr" />
                            </div>
                        </div>
                    </div>
                </div> */}





            </div>
        </div>

    )
}

export default MainPage

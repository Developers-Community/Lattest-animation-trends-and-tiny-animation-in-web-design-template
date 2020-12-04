import React from 'react'

const HomeAnimation = () => {
    return (
        <div>
            {/* Home================================================= */}
            <div id="home">
                <div className="home-background" />
                <div className="home-text">
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="home-text-top">we are</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="line" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="home-text-middle words">g a m i c a</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="line" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="home-text-bottom">design studio</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="cl-effect-18">
                                <a href="#" data-hover="facebook">facebook</a>
                                <a href="#" data-hover="Twitter">Twitter</a>
                                <a href="#" data-hover="Google+">Google+</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="arrow"><a href="#profile" className="scroll">About Us</a></div>
            </div>
        </div>
    )
}

export default HomeAnimation

import React, { useEffect } from 'react'
import {WOW} from 'wowjs'

const Footer = () => {

    useEffect(() => {
        const wow = new WOW({live: false})
        wow.init()
    }, [])

    return (
        <>
            <div className="footer">
                <div className="container">
                    <br/><br/>

                    <div className="collab">
                        <p className="wow fadeInUp">Got an interesting project? I can help you.</p>
                    </div>

                    <br/>

                    <div className="hr"></div>

                    <br/><br/>

                    <div className="info">
                        <div className="flex">
                            <div className="wd w_left" id="personal">
                                <p className="wow fadeInUp">connect with me</p>
                                <h4 className="wow fadeInUp" data-wow-delay="0.2s">ig @djinn</h4>
                                <br/><br/>
                            </div>

                            <div className="wd w_center" id="media">
                                <p className="wow fadeInUp" data-wow-delay="0s">follow me</p>
                            
                                <ul>
                                    <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s">fb</li>
                                    <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">ig</li>
                                    <li id="tw" className="wow fadeInUp" data-wow-delay="0.8s">tw</li>
                                    <li id="yt" className="wow fadeInUp" data-wow-delay="1s">yt</li>
                                </ul>

                                <br/><br/>                            
                            </div>


                            <div className="wd w_right" id="address"> 
                                <p className="wow fadeInUp" data-wow-delay="0s">say hello</p>
                                <h4 className="wow fadeInUp" data-wow-delay="0.2s">djinn@mail.com</h4>
                                <br/><br/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <br/><br/><br/><br/>
        </>
    )
}

export default Footer

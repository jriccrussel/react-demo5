import React, { useEffect } from 'react'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="container">
                    <br/><br/>

                    <div className="collab">
                        <p className="animate__animated animate__fadeInUp">Got an interesting project? I can help you.</p>
                    </div>

                    <br/>

                    <div className="hr"></div>

                    <br/><br/>

                    <div className="info">
                        <div className="flex">
                            <div className="wd w_left" id="personal">
                                <p className="animate__animated animate__fadeInUp">connect with me</p>
                                <h4 className="animate__animated animate__fadeInUp animate__slower">ig @djinn</h4>
                                <br/><br/>
                            </div>

                            <div className="wd w_center" id="media">
                                <p className="animate__animated animate__fadeInUp animate__slo">follow me</p>
                            
                                <ul>
                                    <li id="fb" className="animate__animated animate__fadeInUp" >fb</li>
                                    <li id="ig" className="animate__animated animate__fadeInUp" >ig</li>
                                    <li id="tw" className="animate__animated animate__fadeInUp" >tw</li>
                                    <li id="yt" className="animate__animated animate__fadeInUp" >yt</li>
                                </ul>

                                <br/><br/>                            
                            </div>


                            <div className="wd w_right" id="address"> 
                                <p className="animate__animated animate__fadeInUp">say hello</p>
                                <h4 className="animate__animated animate__fadeInUp animate__slower">djinn@mail.com</h4>
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

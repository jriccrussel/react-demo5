import React from 'react'
import { Link } from 'react-router-dom'
import {WOW} from 'wowjs'

const Work = () => {
    return (
        <>  
            <div className="whitespace"></div>

            <div className="abt_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <div className="w_left">
                            <h3 className="wow fadeInUp" data-wow-delay="1s">work.</h3>
                            <p class="wow fadeInUp" data-wow-delay="1.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque magni ab repudiandae, quasi minus unde temporibus nulla eum eaque! Placeat praesentium sunt suscipit laboriosam deserunt commodi atque corporis, iure maiores dicta, fugit similique.</p>
                        </div>

                        <div className="w_right"></div>
                    </div>
                    
                </div>
            </div>

            <div className="sect_project">

                <div className="whitespace"></div>
                <div className="whitespace"></div>

                <div className="flex project1">
                    <div className="w_left"></div>

                    <div className="w_right">
                        <Link to="/work/project">
                            <div className="prj1 wow fadeInUp" data-wow-delay="0.4s">
                                <img className="wow fadeInUp" data-wow-delay="0.2s" src="https://images.unsplash.com/photo-1540349220179-09d3866f2e74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" alt="" />  
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project2">
                    <div className="w_left">
                        <Link to="/work/project">
                            <div className="prj2 wow fadeInUp" data-wow-delay="0.4s">
                                <img className="wow fadeInUp" data-wow-delay="0.2s" src="https://images.unsplash.com/photo-1468870045442-e7d799d8c98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project3">
                    <div className="w_left"></div>

                    <div className="w_center">
                        <Link to="/work/project">
                            <div className="prj3 wow fadeInUp" data-wow-delay="0.4s">
                                <img className="wow fadeInUp" data-wow-delay="0.2s" src="https://images.unsplash.com/photo-1482501157762-56897a411e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project4">
                    <div className="w_left"></div>

                    <div className="w_center">
                       <Link to="/work/project">
                            <div className="prj4 wow fadeInUp" data-wow-delay="0.4s">
                                <img className="wow fadeInUp" data-wow-delay="0.2s" src="https://images.unsplash.com/photo-1435685813800-51ba4ceb9c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1785&q=80" alt="" />
                            </div>
                       </Link>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

            </div>
        </>
    )
}

export default Work

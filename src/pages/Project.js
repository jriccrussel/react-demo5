import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {WOW} from 'wowjs'
import { IonIcon } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { useGlobalContext } from '../context'

const Project = () => {
    const [state, setState] = useState({id: 0})
    const {id} = useParams()

    // console.log(id)

    const prevBtn = () => {
        setState(state => state - 1)
    }

    const nextBtn = () => {
        setState(state => state + 1)
    }

    const {hello} = useGlobalContext()

    return (
        <>
            <div className="whitespace"></div>

            <div className="abt_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <br/>
                        <div className="wd_100">
                            <h1 className="wow fadeInUp" data-wow-delay="1s">Project Name</h1>
                        </div>
                            
                        <div className="wd">
                            <p class="wow fadeInUp" data-wow-delay="1.2s">service :</p>
                            <h6 class="wow fadeInUp" data-wow-delay="1.3s">Web Development</h6>
                        </div>

                        <div className="wd">
                            <p class="wow fadeInUp" data-wow-delay="1.4s">started :</p>
                            <h6 class="wow fadeInUp" data-wow-delay="1.5s">8 May 2019</h6>
                        </div>

                        <div className="wd">
                            <p class="wow fadeInUp" data-wow-delay="1.6s">completed :</p>
                            <h6 class="wow fadeInUp" data-wow-delay="1.7s">15 May 2019</h6>
                        </div>

                        <br/>

                        <div className="wd_100">
                            <p class="wow fadeInUp" data-wow-delay="1.8s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque magni ab repudiandae, quasi minus unde temporibus nulla eum eaque! Placeat praesentium sunt suscipit laboriosam deserunt commodi atque corporis, iure maiores dicta, fugit similique.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="abt_content project_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <div className="wd_left">
                            <img className="wow fadeInUp" data-wow-delay="0.8s" src="https://images.unsplash.com/photo-1540885762261-a2ca01f290f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" alt="" />
                        </div>

                        <div className="wd_right">
                            <img className="wow fadeInUp" data-wow-delay="0.8s" src="https://images.unsplash.com/photo-1540885762261-a2ca01f290f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="abt_content project_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <div className="wd_left2">
                            <Link
                                onClick={prevBtn}
                                to={`/work/${ state.id}`}
                                className={ state.id === 0 ? "disable" : ""} 
                            >
                                <IonIcon icon={arrowBack}></IonIcon>prev
                            </Link>
                        </div>

                        <div className="wd_right2">
                            <Link 
                                onClick={nextBtn}
                                to={`/work/${state.id}`}
                                className={ id === 0 ? "disable" : ""} 
                            >
                                next<IonIcon icon={arrowForward}></IonIcon>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="whitespace"></div>


        </>
    )
}

export default Project

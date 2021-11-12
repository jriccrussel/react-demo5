import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {WOW} from 'wowjs'
import { IonIcon } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { useGlobalContext } from '../context'
import ReactPaginate from 'react-paginate'

const Project = () => {
    // const [state, setState] = useState({id: 0})
    // const {id} = useParams()
    // // console.log(id)
    // const prevBtn = () => {
    //     setState(state => state - 1)
    // }
    // const nextBtn = () => {
    //     setState(state => state + 1)
    // }

    const {
        project,
        offset,
        perPage,
        handlePageClick,
        pageCount,
        isLoading,
    } = useGlobalContext()

    if(isLoading) {
        return <div className="loading">Loading...</div>
    }

    console.log(project)

    return (
        <>
            <div className="whitespace"></div>

            {project.slice(offset, offset + perPage).map((item) => {
                const {id, title, service, started, completed, details, img} = item

                return(
                    <>
                        <div className="abt_content">
                            <div className="wrapper">
                                <br/><br/>
                                <div className="work_wrapper flex">
                                    <br/>
                                    <div className="wd_100">
                                        <h1 className="wow fadeInUp" data-wow-delay="1s">{title}</h1>
                                    </div>
                                        
                                    <div className="wd">
                                        <p class="wow fadeInUp" data-wow-delay="1.2s">service :</p>
                                        <h6 class="wow fadeInUp" data-wow-delay="1.3s">{service}</h6>
                                    </div>

                                    <div className="wd">
                                        <p class="wow fadeInUp" data-wow-delay="1.4s">started :</p>
                                        <h6 class="wow fadeInUp" data-wow-delay="1.5s">{started}</h6>
                                    </div>

                                    <div className="wd">
                                        <p class="wow fadeInUp" data-wow-delay="1.6s">completed :</p>
                                        <h6 class="wow fadeInUp" data-wow-delay="1.7s">{completed}</h6>
                                    </div>

                                    <br/>

                                    <div className="wd_100">
                                        <p class="wow fadeInUp" data-wow-delay="1.8s">{details}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="abt_content project_content">
                            <div className="wrapper">
                                <br/><br/>
                                <div className="work_wrapper flex">
                                    <div className="wd_left">
                                        <img className="wow fadeInUp" data-wow-delay="0.8s" src={img} alt="" />
                                    </div>

                                    <div className="wd_right">
                                        <img className="wow fadeInUp" data-wow-delay="0.8s" src={img} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </>
                )
            })}

            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />

            <div className="abt_content project_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <div className="wd_left2">
                            <Link to="/">
                                <IonIcon icon={arrowBack}></IonIcon>prev
                            </Link>
                        </div>

                        <div className="wd_right2">
                            <Link to="/">
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

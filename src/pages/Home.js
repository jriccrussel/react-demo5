import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="header">
                    {/* <h1 className="line">I make brands matter in culture.</h1> */}
                    <Typewriter 
                        onInit={(type) => {
                            type.typeString("I make brands matter in culture.")
                            .pauseFor(4000)
                            .deleteAll()
                            .typeString("I create to inspire.")
                            .start()
                        }}

                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>

            <div className="scroll-down"></div>

            <div className="sect_project">

                <br/><br/><br/>

                <h6>Selected projects</h6>

                <div className="vertical"></div>

                <br/>

                <div className="whitespace"></div>
                <div className="whitespace"></div>

                <div className="flex project1">
                    <div className="w_left"></div>

                    <div className="w_right">
                        <div className="prj1">
                            <img src="https://images.unsplash.com/photo-1540349220179-09d3866f2e74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" alt="" />
                        </div>
                    </div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project2">
                    <div className="w_left">
                        <div className="prj2">
                            <img src="https://images.unsplash.com/photo-1468870045442-e7d799d8c98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80" alt="" />
                        </div>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project3">
                    <div className="w_left">

                    </div>

                    <div className="w_center">
                        <div className="prj3">
                            <img src="https://images.unsplash.com/photo-1482501157762-56897a411e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
                        </div>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

                <div className="flex project4">
                    <div className="w_left"></div>

                    <div className="w_center">
                        <div className="prj4">
                            <img src="https://images.unsplash.com/photo-1435685813800-51ba4ceb9c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1785&q=80" alt="" />
                        </div>
                    </div>

                    <div className="w_right"></div>
                </div>

                <div className="whitespace"></div>

            </div>
        </>
    )
}

export default Home
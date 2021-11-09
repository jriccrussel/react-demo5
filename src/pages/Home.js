import React from 'react'
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
        </>
    )
}

export default Home
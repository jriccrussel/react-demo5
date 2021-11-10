import React from 'react'
import {WOW} from 'wowjs'

const Contact = () => {
    return (
        <>
            <div className="whitespace"></div>

            <div className="abt_content">
                <div className="wrapper">
                    <br/><br/>
                    <div className="work_wrapper flex">
                        <div className="w_left">
                            <h3 class="wow fadeInUp" data-wow-delay="1s">say hello 👋</h3><br/>
                            <p class="wow fadeInUp" data-wow-delay="1.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque magni ab repudiandae, quasi minus unde temporibus nulla eum eaque! Placeat praesentium sunt suscipit laboriosam deserunt commodi atque corporis, iure maiores dicta, fugit similique.</p>
                        </div>

                        <div className="w_right"></div>
                    </div>
                    
                </div>
            </div>

            <div className="sect_form">
                <div className="wrapper flex">
                    <div className="w_left">
                        <form action="" name="contact-form" id="contact-form">
                            <div className="input-row wow fadeInUp" data-wow-delay="1.4s">
                                <label for="contact-name">Name :</label>
                                <div class="textarea">
                                    <input type="text" name="contact-name" id="contact-name" value="" required />
                                </div>
                            </div>

                            <div className="input-row wow fadeInUp" data-wow-delay="1.6s">
                                <label for="contact-email">Email :</label>
                                <div class="textarea">
                                    <input type="email" name="contact-email" id="contact-email" value="" required/>
                                </div>
                            </div>

                            <div className="input-row wow fadeInUp" data-wow-delay="1.6s">
                                <label for="contact-project">Message :</label>
                                <div class="textarea">
                                    <textarea type="email" name="contact-project" id="contact-project" rows="6" value="" required>
                                    </textarea>
                                </div>
                            </div>

                            <br/><br/>

                            <button id="contact-submit" className="send wow fadeInUp" type="submit" name="contact-submit">Send Message</button>                            

                        </form>
                    </div>

                    <div className="w_right"></div>
                </div>
            </div>

            <div className="whitespace"></div>
        </>
    )
}

export default Contact

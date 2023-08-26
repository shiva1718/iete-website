import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <body>
        <div className="container">
            <div className="innerwrap">

                <section className="section1 clearfix">
                    <div className="textcenter">
                        <span className="seperator"></span>
                        <h2>Contact us to know more ... </h2>
                    </div>
                </section>

                {/*line break*/}


                <section className="section2 clearfix">
                    <div className="col2 column1 first">
                        {/* Google Maps initialization script */}
                        <iframe className={'gmaps-embed'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.905619195998!2d80.25625535917852!3d13.054411035542534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663edc820433%3A0x9d3202883a213b07!2sInstitute%20of%20Electronics%20and%20Telecommunication%20Engineers!5e0!3m2!1sen!2sin!4v1693063507191!5m2!1sen!2sin" width="600" height="450"></iframe>
                    </div>


                    <div className="col2 column2 last">
                        <div className="sec2innercont">
                            <div className="sec2addr">
                                <p>IETE Chennai centre, No: 37,
                                    Conran Smith Road Entrance Peters Road,
                                    Gopalapuram,Chennai,
                                    Tamil Nadu 600086</p>
                                <p><span className="collig">Phone :</span> 044 2835 0773</p>
                                <p><span className="collig">Email :</span> ietechennai@gmail.com </p>
                            </div>
                        </div>

                        <p>
                            <br>
                            </br>
                        </p>
                        <div className="sec2contactform">
                            <form action="">
                                <div className="clearfix">
                                    <input className="col2 first" type="text" placeholder="FirstName" />
                                    <input className="col2 last" type="text" placeholder="LastName" />
                                </div>
                                <div className="clearfix">
                                    <input className="col2 first" type="Email" placeholder="Email" />
                                    <input className="col2 last" type="text" placeholder="Contact Number" />
                                </div>
                                <div className="clearfix">
                                    <textarea name="textarea" id="" cols="30" rows="7" placeholder="Your message here..."></textarea>
                                </div>
                                <div className="clearfix"><input type="submit" value="Send" /></div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        </body>
    );
}

export default Contact;

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

import React  from 'react';
import './About.css';
import Counter from './Counter';
import Colleges from "./Colleges";

const About = () => {

    return (
        <div className={"about-container"}>
            <div className="solid-view">
                <div className='down'>
                    <h1>About Us</h1>
                    <h1 className='arrow'>-&gt;</h1>
                </div>
            </div>
            <div className="parallax-view">
            </div>
            <div className="bottom-view">
                <h2>IETE</h2>
                <p>Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a
                    leading professional society. Its vision is to reach the unreached and empower the youth through
                    Technical Education and Skill development with a Mission for Advancement of Electronics,
                    Telecommunication, Information Technology & other related disciplines; to contribute in
                    Nation's Human Resource & Infrastructure Development through our Engineers & Scientists.
                    The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial
                    Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO).
                    The Institution has also been notified as an Educational Institution of National Eminence by the
                    Government of India. IETE is governed by its elected Governing Council headed by an elected
                    President. It has on its roll the Secretary General – the head of IETE Secretariat as
                    Chief Executive. The Institution is managed through various Committees and Boards nominated
                    by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed
                    by respective Executive Committees. To keep pace with technological development and achieve
                    the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications
                    and brain storming sessions for continued knowledge upgradation of its members.</p>

                <div className="about-main-container">
                    <div className="column">
                        <h2>Chennai Center</h2>
                        <p>
                            Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.
                            <br /><br />
                            The Centre assigns top priority to the basic need for ‘education transformation’ in keeping pace with time, and aims at to develop the highest quality of manpower to cater to the needs & expectations of industry, R&D and educational institutions, with higher degree of employability for today and tomorrow.
                        </p>
                    </div>
                    <div className="column">
                        <h2>Goals</h2>
                        <p>
                            <i className="fa fa-star" aria-hidden="true"></i><strong>Vision:</strong> Reaching the un-reached and empowering the youth through Technical Education and Skill Development.
                            <br />
                            <i className="fa fa-star" aria-hidden="true"></i><strong>Mission:</strong> Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.
                            <br />
                            <i className="fa fa-star" aria-hidden="true"></i><strong>Motives:</strong> IETE is helping its students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme.
                        </p>
                    </div>
                </div>

                <Counter/>

                <h1>LIST OF COLLEGES</h1>
                <div className="colleges-list">
                    {Colleges.map((college, index) => (
                        <div className="college-card" key={index}>
                            {college.name}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default About;

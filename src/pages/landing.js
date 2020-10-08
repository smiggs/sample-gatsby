import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Andrew Smith - System Administrator</title>
            <meta name="description" content="Andrew Smith" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Profile</h2>
                    </header>
                    <p>Reliable and enthusiastic IT Professional. I have experience in a wide range of technologies and is currently focusing on automating Cloud deployments and Linux OS, however previous projects and roles have included Puppet, Solaris, Windows and VMWare server deployment, desktop deployment and support, phone system installation, and Active Directory domain migration.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Experience</h3>
                            </header>
                            <p>Over a fifthteen year career I have worked for companies big and small, working in a whole range of companies from multinational telecoms and defence companies to small just about double digit development houses. </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Skills</h3>
                            </header>
                            <p>As a generalist IT Professional my career has ranged over a number of different technologies starting with Windows Server, Desktop and Active Directory moving into Linux and UNIX but more recently combining those skills with Configuration Managent, Cloud Computing and Devops Pipelines.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Education</h3>
                            </header>
                            <p>Graduated from Northumbria University with First Class Honours in Business Information Systems.<br />
                            The degree programme gave an over technology and how businesses use it, and what businesses everything from financial statements to business applications.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Outside Work</h3>
                            </header>
                            <p>I enjoy exploring the world and try to learn a new thing everyday, my main outlet is my ever improving although not groundbreaking photography and you find my profile site below.</p>
                            <ul className="actions">
                                <li><Link to="https://alwaystaking.photos/" className="button">Photography Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
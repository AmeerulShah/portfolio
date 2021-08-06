import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutVector from '../../assets/about_vector.png';
import FooterLink from '../FooterLink/FooterLink';
import aboutAnime from '../../assets/about_anime.gif';

const About = () =>{

    return(

        // Heading
        <div className='section-container'>
            <Header
                heading ='About Me'
                details='SRE @ Nutanix | B.Tech(IT) @ VIT Vellore | VP-PR @ Toastmasters International and Tech Mentor @ ISOI | CCNA, RHCSA, RHCOE Ansible Certified | EdSupport Volunteer at Make A Difference, NGO '
            />

            {/* Middle part */}
            <div className='about-main'>
                <div className='about-main-left'>

                    <h4 className='about-sub-head'>Currently working as:</h4>
                    <p className='about-details'>
                    I am currently working as a Systems Reliability Engineer(SRE) at Nutanix in Bangalore.
                    </p>

                    <h4 className='about-sub-head'>Roles & Responsibilites undertaken so far:</h4>
                    <p className='about-details'>
                        <ul>
                            <li>Vice President - Public Relations at Toastmasters International</li>
                            <li>Academic Support Volunteer at Make A Difference, NGO</li>
                            <li>Tech Mentor(DSA&Problem Solving) at Instrument Society Of India</li>
                        </ul>
                    </p> 

                    <h4 className='about-sub-head'>Hobbies & Interests:</h4>
                    <p className='about-details'>
                    Creative writing, Community service, Fitness, Public Speaking.
                    </p> 

                    <h4 className='about-sub-head'>Achievements</h4>
                    <p className='about-details'>
                        <ul>
                            <li> Published writer in the Times of Oman magazine.</li>
                            <li>Spelligator 2008 National level finalist(Oman)</li>
                            <li>Pianist with ABRSM certification from the Royal School of Music, London.</li>
                            <li>Completed Level 1 of “Persuasive Influence” Pathways Program in Toastmasters International</li>
                        </ul>
                    </p>

                </div>

                <div className='about-main-right'>
                    <img src={aboutAnime} alt="animation" className='about-anime' />
                </div>

            </div>

            {/* Footer */}
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />

            <div className='about-main'>
                <div className='about-main-left'>

                </div>

                <div className='about-main-right'>
                    
                </div>

            </div>


            {/* Vector frame */}
            <div className='vector-frame'>
                <img src ={aboutVector} className='about-vector' alt='about' />
            </div>

        </div>
    );
};

export default About;


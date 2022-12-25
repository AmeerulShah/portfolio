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
                details='SRE @ Nutanix | B.Tech(IT) @ VIT Vellore'
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
                            <li>Product Manager - VITspot</li>
                            <li>Academic Support Volunteer & Lead at Make A Difference, NGO</li>
                            <li>Technical Lead & Mentor(DSA&Problem Solving) at Instrument Society Of India</li>

                        </ul>
                    </p> 

                    <h4 className='about-sub-head'>Hobbies & Interests:</h4>
                    <p className='about-details'>
                    Creative writing, Community service, Fitness, Public Speaking.
                    </p> 

                    <h4 className='about-sub-head'>Achievements</h4>
                    <p className='about-details'>
                        <ul>
                            <li>Awarded the prestigious ‘STAR AWARD’ for the Financial Year 2023 in Nutanix</li>
                            <li>Received a total of 4 other employee recognition awards within 1 year of working at Nutanix</li>
                            <li>Runner up in VIT Hackathon for the product ‘RoadResQ’</li>
                            <li>670,000+ content views on Quora</li>
                            <li>Completed Level 1 of “Persuasive Influence” Pathways Program in Toastmasters International</li>
                            <li>Academic Excellence in Grade 12th for scoring an aggregate of 96.8%</li>
                            <li>Academic Excellence in Grade 11th for scoring an aggregate of 97.87%</li>
                            <li>Pianist with ABRSM certification from the Royal School of Music, London.</li>
                            <li> Published writer in the Times of Oman magazine</li>
                            <li>Spelligator 2008 National level finalist(Oman)</li>        
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


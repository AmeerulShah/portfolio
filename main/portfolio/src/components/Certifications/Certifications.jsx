import React from 'react';
import './Certifications.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import {certificationsData} from '../../assets/certificationsData';
import CertificationsCard from './CertificationsCard';

// Replica of projects page 
// lottiefiles for more gifs
const Certifications = () => {

    return(
        <div className='section-container'>
            <Header heading=  "My Certifications"
            details= "More certificates to pop up soon!"
            />

            <div className='project-cards-container'>
                {certificationsData.map(({ projectName,projectDescription,imageUrl,projectUrl}) => 

                {
                    return ( <CertificationsCard 
                        projectName={projectName}
                        projectDescription={projectDescription}
                        projectUrl={projectUrl}
                        imageUrl={imageUrl}
                         />
                    );
                })}
            </div>

           <FooterLink phrase = "Get in " link="touch!" toAddress="/contact" />
        </div>
    );
};

export default Certifications;


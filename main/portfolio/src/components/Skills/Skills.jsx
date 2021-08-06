import React from 'react';
import './Skills.css';
import Header from'../Header/Header';
import {skillList} from '../../assets/skillsData';
import skillsVector from '../../assets/skills_vector.png';
import FooterLink from '../FooterLink/FooterLink';
import SkillCard from './SkillCard';


const Skills = () => {

    return(
        <div className='section-container'>
            <Header 
                heading ='My Skills'
                details= 'Always looking to upskill myself!'
            />

            <div className = 'skill-card-container'>
                {skillList.map(({skillName,skillUrl}) =>(
                    <SkillCard skillName={skillName} skillUrl={skillUrl}/> 
                ))}
            </div>

            <div className='extra-longskill'>
                <img className='samesize-img' src='https://hyperhci.com/wp-content/uploads/2020/01/nutanix-vsphere-cluster-compressed-1.jpg' alt='skill' />
                <p>Virtualisation(VMWare,Hyper-V,Nutanix)</p>
            </div>

            <FooterLink
                phrase = 'Check out my ' link='certifications!'  toAddress='/certifications'/>

            <div className='skills-vector-frame'>
                <img src={skillsVector}  alt='skills'  className='skills-vector' />
            </div>
        </div>
    );
};

export default Skills;


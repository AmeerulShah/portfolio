import React from 'react';
import './Skills.css';

const SkillCard = ({ skillName, skillUrl }) => {
    return (
        <div className='skill'>
            <img className='samesize-img' src={skillUrl} alt='skill' />
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;
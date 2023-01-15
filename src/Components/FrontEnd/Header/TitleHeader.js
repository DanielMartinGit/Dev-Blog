import React from "react";

import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'

const TitleHeader = () =>
{
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo-wrapper'>
                    <div className='logo'>
                        <FaCode/>
                        <span> Daniel Martin - Personal Blog </span>
                    </div>

                    <div className='socials'> 
                    <a href='https://github.com/DanielMartinGit' target='_blank' rel="noreferrer"><FaGithub/> </a>
                    <a href='https://www.linkedin.com/in/daniel-martin-b1a413111/' target='_blank' rel="noreferrer"><FaLinkedin/> </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TitleHeader;
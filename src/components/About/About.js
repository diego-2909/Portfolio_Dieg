import React, { useEffect } from 'react';
import "./About.css"
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    return (
        <div className='background-About' id='aboutme'>

            <div className="bloc-about">
                <h2 className='titre-about'> À propos de moi</h2>

                <span className='description-about'>
                    Je m'appelle Diego, j'ai 21 ans, et je suis de Toulouse. <br /> Étudiant en Licence informatique à l'université Paul Sabatier,
                    je me dirige<br />vers une licence Professionnelle RTAI <br /> (Responsable technique d'application Internet) à l'Université Capitole de Toulouse. <br /><br />
                    J'ai décidé de faire cette licence professionnelle après avoir découvert le HTML/CSS et<br /> Javascript en autodidacte.
                    <br /> J'utilise en ce moment ReactJS car c'est une librairie qui m'interesse beaucoup.
                    <br /> <br /> Je cherche une alternance en Développeur Front-End React.
                </span>

            </div>


        </div >
    );
};

export default About;
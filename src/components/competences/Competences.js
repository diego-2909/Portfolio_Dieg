import React, { useEffect } from 'react';
import "./Competences.css"
import css from "../../media/1200px-CSS.3.svg.png"
import js from "../../media/js-logo.png"
import html from "../../media/5847f5bdcef1014c0b5e489c.png"
import react from "../../media/React-icon.svg.png"
import { FaJava, FaSortAlphaDown } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";



const Competences = () => {
    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div className="competences" id="competences">
            <div className="competences-titre">
                <h1>Compétences</h1>
            </div>

            <div className="bloccompetences miniature">

                <h3>Langages appris en Licence informatique :</h3>

                <ul className='listeLangages'>
                    <br />
                    <br />
                    <li>C </li>
                    <li>Java </li>
                    <li>SQL</li>
                    <li>Assembleur</li>
                    <li>Python</li>
                    <li>Bash</li>
                </ul>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="bloctitre">
                <h2>Langages appris en autodidacte :</h2>

            </div>


            <div data-aos="fade-left" data-aos-duration="1000" className="bloc1 miniature">
                <img src={html} alt="" className='imagelogo' />
                <span className='desclogiciel'> Bonnes conaissances</span>


            </div>
            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" className="bloc2 miniature">
                <img src={css} alt="" className='logocss' />
                <span className='desclogiciel'>Bonnes conaissances</span>

            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="bloc3 miniature">
                <img src={js} alt="" className='imagelogo' />
                <span className='nomlogiciel'>JavaScript</span>
                <span className='desclogiciel'>Bases</span>

            </div>
            <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400" className="bloc4 miniature">
                <img src={react} alt="" className='reactlogo' />
                <span className='nomlogiciel'>Librairie React</span>
                <span className='desclogiciel'>Bases <br /></span>


            </div>


        </div >
    );
};

export default Competences;
import React, { useEffect } from 'react';
import "./Projets.css"
import css from "../../media/1200px-CSS.3.svg.png"
import js from "../../media/js-logo.png"
import html from "../../media/5847f5bdcef1014c0b5e489c.png"
import react from "../../media/React-icon.svg.png"
import { FaJava, FaSortAlphaDown } from 'react-icons/fa';
import Aos from 'aos';
import projetPortfolio from "../../media/Projet1.png"
import imageprojetjava1 from "../../media/imageprojetjava1.png"
import imageprojetjava2 from "../../media/imageprojetjava2.png"
import "aos/dist/aos.css";



const Projets = () => {
    return (
        <div className="projets" id="idprojets">
            <div data-aos="fade-up" data-aos-duration="1000" className="principauxprojets">
                <h2>Principaux projets</h2>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="projet blocprojet">
                <img src={projetPortfolio} alt="" className='imageprojet1' />
                <h4 className='nomlogiciel'>Portfolio</h4>


            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="projet2 miniature">
                <h4>Prochainement..</h4>

            </div>
            <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400" className="projet3 blocprojet">
                <img src={imageprojetjava2} alt="" className='imageprojetjava' />
                <img src={imageprojetjava1} alt="" className='imageprojetjava' />
                <h4>Blockchain en C et en Java</h4>
                <p> lien Github : <a className='lienProjet' href='https://github.com/diego-2909/Projet_Blockchain/tree/main/Projet_Blockchain'>ici</a></p>

            </div>


        </div >
    );
};

export default Projets;
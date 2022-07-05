import React from 'react';
import "./Projets.css"
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
                <img src={imageprojetjava2} alt="" className='image-projet-carousel' />
                <img src={imageprojetjava1} alt="" className='image-projet-carousel' />
                <h4>Blockchain en C et en Java</h4>
                <p> lien hhGithub : <a href='https://github.com/diego-2909/Projet_Blockchain/tree/main/Projet_Blockchain'>ici</a></p>

            </div>


        </div >
    );
};

export default Projets;
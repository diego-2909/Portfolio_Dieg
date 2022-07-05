import React, { useEffect } from 'react';
import profil from "../../media/IMG_9493.jpg"
import Aos from 'aos';
import "./Presentation.css"
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import "aos/dist/aos.css";

const BlocPresentation = () => {
    useEffect(() => {
        Aos.init()
    }, []);


    return (
        <div className="presentation" id='accueil'>

            <div className="bloc-photo-presentation"><img className="img-presentation" src={profil} alt="" />
            </div>
            <div className="pos-texte-presentation">
                <div className="bloctexte">
                    <p className="Bonjour texte">Hello World,</p>
                    <p className="Prenom texte">Je suis Diego Cortès</p>
                    <p className="etudiant texte">Étudiant en développement Web</p>
                </div>

            </div>

            <div className="logos-presentation">
                <a href='https://github.com/diego-2909'><i><FaGithubSquare size={22} /></i></a>
                <a href='https://www.linkedin.com/in/diego-cortes31/'><i><FaLinkedin size={22} /></i></a>
                <a href='https://twitter.com/DiegoC_web'><i><FaTwitterSquare size={22} /></i></a>
                <a href='mailto:d.cortes@me.com'><i><RiMailFill size={24.5} /></i></a>


            </div>

        </div>
    );
};

export default BlocPresentation;
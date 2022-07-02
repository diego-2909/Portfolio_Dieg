import React, { useState } from 'react';
import "./Navbar.css"
import CV from "../../media/CV_Alternance.pdf";
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { Link, animateScroll as scroll } from 'react-scroll';
import "aos/dist/aos.css";


const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
            setIsMenuClicked(true);
        }
        else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden")
            setIsMenuClicked(false);
        }

    }

    return (
        <div className='navbar'>
            <nav>
                <div className="lefside">
                    <div className='burger-menu' onClick={updateMenu} >
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                    <h1 className='prenom'> Diego Cortès</h1>

                </div>

                <div className="rightside">
                    <ul className=' liste'>
                        <li > <Link activeClass="active"

                            to="accueil"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} > Accueil</Link> </li>
                        <li> <Link className="underline" activeClass="active"
                            to="aboutme"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} >À propos de moi</Link> </li>
                        <li>
                            <Link className="underline" activeClass="active "
                                to="competences"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500} > Compétences</Link>
                        </li>
                        <li>
                            <Link className="underline" activeClass="active"
                                to="idprojets"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500} >Projets</Link>
                        </li>
                        <li> <Link activeClass="active"
                            to="contactme"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} >Me Contacter</Link> </li>

                        <li><a href={CV} download className="grandCV myButton"><h4>Téléchargez mon CV</h4> <HiOutlineDocumentDownload /></a></li>
                        <li><a href={CV} download className="petitCV myButton"><h4>CV</h4> <HiOutlineDocumentDownload /></a></li>
                    </ul>
                </div>
            </nav >


            <div className={menu_class}>
                <ul className=' liste_menu'>
                    <li> <Link activeClass="active"
                        onClick={updateMenu}
                        to="accueil"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} >Accueil</Link> </li>
                    <li> <Link className="underline" activeClass="active"
                        onClick={updateMenu}
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={900} >À propos de moi</Link> </li>
                    <li>
                        <Link className="underline" activeClass="active"
                            onClick={updateMenu}
                            to="competences"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={900} > Compétences</Link>
                    </li>
                    <li>
                        <Link className="underline" activeClass="active"
                            onClick={updateMenu}
                            to="idprojets"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={900} > Projets</Link>
                    </li>
                    <li> <Link activeClass="active"
                        onClick={updateMenu}
                        to="contactme"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={900} >Me Contacter</Link> </li>

                    <li><a href={CV} download className="myButton"><h4>Téléchargez mon CV</h4> <HiOutlineDocumentDownload /></a></li>
                </ul>




            </div>
        </div >
    );
};

export default Navbar;
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import Aos from 'aos';
import "aos/dist/aos.css";

export const Contact = () => {
    useEffect(() => {
        Aos.init()
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m70q0tn', 'template_64am9j5', form.current, '8ZraBZGg43ngMMIs6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact" id='contactme'>
            <div data-aos="fade-up" data-aos-duration="1000" className="messagemail">
                <h2>Contact</h2>
            </div>

            <form data-aos="fade-up" data-aos-duration="1000" ref={form} onSubmit={sendEmail} className="blocmail">
                <div className="nomenvoyeur">
                    <label>Nom, Prénom</label>
                    <input className="blocnomenvoyeur" type="text" name="user_name" />
                </div>
                <div className="mailenvoyeur">
                    <label>Email</label>
                    <input className="blocmailenvoyeur" type="email" name="user_email" />
                </div>
                <div className="blocmessage">
                    <label>Message</label>
                    <textarea className="text" name="message" />

                </div>
                <div className="boutonenvoie">
                    <input className='bouton-bleu boutonenvoyer' type="submit" value="Envoyer" />
                </div>

            </form>
        </div>

    );
};
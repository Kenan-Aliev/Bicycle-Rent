import React from 'react';
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Links from "./Links/Links";
import './footer.css'
import Container from "../Container/Container";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="footer__firstBlock">
                <Container>
                    <Contacts/>
                    <Form/>
                </Container>
            </div>
            <div className={'footer__secondBLock'}>
                <Links/>
            </div>
        </div>
    );
};

export default Footer;
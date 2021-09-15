import React from 'react';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className={'main'}>
            <Container>
                <Header/>
                <Catalog/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Main;
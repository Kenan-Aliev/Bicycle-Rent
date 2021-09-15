import React from 'react';
import './links.css'
import Container from "../../Container/Container";

const Links = () => {
    return (
        <div className={'links'}>
            <Container>
                <div className={'links__bicycleRent'}>
                    <h1 className={'links__bicycleRent-title'}>Аренда велосипедов</h1>
                    <div className={'links__bicycleRent-item'}>Алюминий</div>
                    <div className={'links__bicycleRent-item'}>Карбон</div>
                    <div className={'links__bicycleRent-item'}>Горные/городские</div>
                    <div className={'links__bicycleRent-item'}>Городские эконом</div>
                </div>
                <div className={'links__items'}>
                    <div className={'links__items-item'}>Товары</div>
                    <div className={'links__items-item'}>Правила</div>
                    <div className={'links__items-item'}>Отзывы</div>
                    <div className={'links__items-item'}>Контакты</div>
                    <div className={'links__items-item'}>Обратная связь</div>
                </div>
            </Container>
        </div>
    );
};

export default Links;
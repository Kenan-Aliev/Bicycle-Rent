import React from 'react';
import './contacts.css'

const Contacts = () => {
    return (
        <div className={'contacts'}>
            <h1 className={'contacts__title'}>
                Контакты
            </h1>
            <div className={'contacts__number'}>999 999 999 </div>
            <div className={'contacts__number2'}>8884 4949393</div>
            <div className="contacts__email">info@bikerental.ae</div>
            <div className="contacts__street">Страна А, город Б, ул. АААА</div>
        </div>
    );
};

export default Contacts;
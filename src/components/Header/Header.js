import React, {useEffect, useState} from 'react';
import './header.css'

const Header = () => {
    const date = new Date()
    const seconds = date.getSeconds()
    const milliseconds = (60 - seconds) * 1000
    const [changeTime, setChangeTime] = useState(date)
    useEffect(() => {
        setTimeout(() => {
            setChangeTime(new Date())
        }, milliseconds)
    }, [changeTime])

    return (
        <div className={'header'}>
            <h1 className={'header__title'}>BikePark</h1>
            <div className={'header__links'}>
                <div className={'header__links-item'}>О нас</div>
                <div className={'header__links-item'}>Аренда</div>
                <div className={'header__links-item'}>Доставка</div>
                <div className={'header__links-item'}>Где кататься</div>
                <div className={'header__links-item'}>Контакты</div>
            </div>
            <div
                className={'header__date'}>{changeTime.getHours() < 10 ? `0${changeTime.getHours()}` : changeTime.getHours()}:
                {changeTime.getMinutes() < 10 ? `0${changeTime.getMinutes()}` : changeTime.getMinutes()}</div>
            <div className={'header__authLinks'}>
                <div className={'header__authLinks-item'}>Вход</div>
                <div className={'header__authLinks-line'}></div>
                <div className={'header__authLinks-item'}>Регистрация</div>
            </div>
            <div className={'header__feedback'}>Обратная свзяь</div>
        </div>
    );
};

export default Header;
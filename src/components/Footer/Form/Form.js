import React from 'react';
import './form.css'

const Form = () => {
    return (
        <div className={'form'}>
            <div className={'form__input'}>
                <input type="text" placeholder={'Введите имя '}/>
            </div>
            <div className={'form__input'}>
                <input type="text" placeholder={'Введите номер телефона'}/>
            </div>
            <div className={'form__btn'}>
                <button type={'button'}>
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default Form;
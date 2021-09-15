import React from 'react';

const CatalogItem = (props) => {
    return (
        <div className={'catalog__item'}>
            <h3 className={'catalog__item-title'}>{props.title}</h3>
            <div className={'catalog__carts'}>
                <div className={'catalog__carts-cart'}>
                    <div className={'cart__img'}>Фото</div>
                    <p className={'cart__description'}>{props.description}</p>
                    <div className={'cart__footer'}>
                        <div className={'cart__price'}>{props.price}</div>
                        <div className={'cart__moreInfo'}>Подробнее</div>
                    </div>
                </div>
                <div className={'catalog__carts-cart'}>
                    <div className={'cart__img'}>Фото</div>
                    <p className={'cart__description'}>{props.description}</p>
                    <div className={'cart__footer'}>
                        <div className={'cart__price'}>{props.price}</div>
                        <div className={'cart__moreInfo'}>Подробнее</div>
                    </div>
                </div>
                <div className={'catalog__carts-cart'}>
                    <div className={'cart__img'}>Фото</div>
                    <p className={'cart__description'}>{props.description}</p>
                    <div className={'cart__footer'}>
                        <div className={'cart__price'}>{props.price}</div>
                        <div className={'cart__moreInfo'}>Подробнее</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
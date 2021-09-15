import React from 'react';
import './catalog.css'
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {
    return (
        <div className={'catalog'}>
            <h1 className={'catalog__title'}>Каталог товаров</h1>
            <CatalogItem
                title={'ШОРТЫ'}
                description={'Товар товарный Товар товарныйТовар товарный Товар товарный'}
                price={'30 AED'}/>
            <CatalogItem
                title={'ФУТБОЛКИ'}
                description={'Товар товарный Товар товарныйТовар товарный Товар товарный'}
                price={'30 AED'}/>
            <CatalogItem
                title={'КРОССОВКИ'}
                description={'Товар товарный Товар товарныйТовар товарный Товар товарный'}
                price={'30 AED'}/>
        </div>
    );
};

export default Catalog;
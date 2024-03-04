import css from './SectionTariff.module.css'
import Tariff from "./Tariff/Tariff";
import React from 'react';

const SectionTariff = (props) => {

    const tariffs = [
        {
            current: props.isAuth,
            background: '#FFB64F',
            color: '#000000',
            title: 'Beginner',
            subTitle: 'Для небольшого исследования',
            icon: '/static/icon-bulb.svg',
            price: '799 ₽',
            oldPrice: '1 200 ₽',
            textPrice: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            content: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7',
            ]

        },
        {
            current: false,
            background: '#7CE3E1',
            color: '#000000',
            title: 'Pro',
            subTitle: 'Для HR и фрилансеров',
            icon: '/static/icon-target.svg',
            price: '1 299 ₽',
            oldPrice: '2 600 ₽',
            textPrice: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            content: [
                'Все пункты тарифа Beginner',
                'Экспорт истории',
                'Рекомендации по приоритетам',
            ]

        },
        {
            current: false,
            background: '#000000',
            color: '#FFFFFF',
            title: 'Business',
            subTitle: 'Для корпоративных клиентов',
            icon: '/static/icon-laptop.svg',
            price: '2 379 ₽',
            oldPrice: '3 700 ₽',
            textPrice: '',
            content: [
                'или 279 ₽/мес. при рассрочке на 24 мес.',
                'Безлимитное количество запросов',
                'Приоритетная поддержка',
            ]

        },
    ]

    return (
        <section className={css.section}>
            <h2 className={css.text}>
                наши тарифы
            </h2>
            <div className={css.content}>
                {tariffs.map((item, key) => <Tariff key={key} item={item} />)}
            </div>

        </section>
    )

}

export { SectionTariff }
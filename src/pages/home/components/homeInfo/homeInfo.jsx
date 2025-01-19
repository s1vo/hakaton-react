import React from 'react';
import {InfoCard} from "./components/infoCard/infoCard";

import './homeInfo.scss'
import {Expandable} from "../../../../shared/ui";


export const HomeInfo = () => {
    return (
        <section className="home-info">
            <h2>О нашей команде</h2>
            <p>
                <strong>Наша команда</strong> объединяет <span className="highlight">профессионалов</span> из разных
                областей, включая
                 <em> разработку</em>, <em>дизайн</em> и <em>аналитику</em>. Мы работаем вместе, чтобы создавать
                <span className="highlight"> современные цифровые решения</span>, которые меняют мир и упрощают
                повседневную жизнь.
                Наш подход сочетает в себе <strong>инновации</strong>, <strong>практичность</strong> и
                <strong>стремление к совершенству</strong>.
            </p>
            <p>
                <span className="highlight">Каждый проект</span> для нас — это не просто задача,
                а <strong>возможность</strong> сделать
                что-то значимое. Мы внимательно изучаем потребности наших клиентов, чтобы создавать продукты,
                которые действительно <span className="highlight">отвечают их ожиданиям</span> и требованиям.
            </p>
            <h2>Почему выбирают нас</h2>
            <InfoCard/>

            <Expandable label="Интересный факт о разработке React">
                <p>
                    <span className="highlight">Интересный факт</span> о React: он был впервые представлен в 2013 году и
                    стал <strong>революцией</strong> в разработке интерфейсов. Его концепция виртуального DOM и
                    использование JSX
                    изначально вызвали скептицизм, но сегодня React стал стандартом для создания современных
                    веб-приложений,
                    <span className="highlight">меняя подход</span> к разработке интерфейсов во всем мире.
                </p>

            </Expandable>
        </section>
    )
};
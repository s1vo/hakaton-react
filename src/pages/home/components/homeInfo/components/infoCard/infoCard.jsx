import React from "react";
import { Icon } from "../../../../../../shared/ui";
import {
    faBriefcase,
    faCode,
    faDraftingCompass,
    faShieldAlt,
    faMagic,
} from "@fortawesome/free-solid-svg-icons";
import "./infoCard.scss";

// Данные для карточек
const cardsData = [
    {
        id: 1,
        icon: faBriefcase,
        title: "Опыт",
        description:
            "Более 10 успешно завершённых проектов для различных отраслей. Мы ценим качество и стараемся учитывать каждую мелочь.",
    },
    {
        id: 2,
        icon: faCode,
        title: "Технологии",
        description:
            "Используем современные фреймворки, такие как React, Node.js и NestJS, чтобы обеспечить высочайшее качество разработки.",
    },
    {
        id: 3,
        icon: faDraftingCompass,
        title: "Инновации",
        description:
            "Постоянно развиваемся, исследуем новые тренды и внедряем их в наши проекты, чтобы идти в ногу со временем.",
    },
    {
        id: 4,
        icon: faShieldAlt,
        title: "Надёжность",
        description:
            "Мы ценим доверие наших клиентов, выполняя проекты в срок и предоставляя полную прозрачность на каждом этапе.",
    },
    {
        id: 5,
        icon: faMagic,
        title: "Креативность",
        description:
            "Мы не боимся мыслить нестандартно и находить уникальные решения для самых сложных задач. Наша команда всегда стремится добавить творчества и инноваций в каждый проект, чтобы выделить ваши идеи среди конкурентов.",
    },
];

export const InfoCard = () => {
    return (
        <div className="card-container">
            {cardsData.map((card) => (
                <div className="card" key={card.id}>
                    <Icon className="card-icon" icon={card.icon} margin="0 0 0 10px" size={40}/>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

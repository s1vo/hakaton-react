import React from 'react';
import './teamCard.css';
import photoMisha from '../../../assets/images/avatars/misha.jpg';
import photoRuslan from '../../../assets/images/avatars/ruslan.jpg';
import photoNikita from '../../../assets/images/avatars/nikita.jpg';

// Пример данных участников команды
const teamMembers = [
    {
        id: 1,
        name: 'Сивоконь Михаил',
        role: 'Team lead разработки',
        photo: photoMisha, // Замените на URL фотографии
        description: 'Михаил отвечает за управление командой, распределение задач и обеспечение высокого качества разработки. Его опыт и лидерские качества помогают команде эффективно достигать поставленных целей.',
    },
    {
        id: 2,
        name: 'Мамедбеков Руслан',
        role: 'Разработчик Frontend',
        photo: photoRuslan, // Замените на URL фотографии
        description: 'Руслан занимается разработкой пользовательского интерфейса, внедрением новых технологий и созданием интерактивных и удобных веб-приложений.',
    },
    {
        id: 3,
        name: 'Никита Рябиков',
        role: 'Разработчик Frontend',
        photo: photoNikita, // Замените на URL фотографии
        description: 'Никита специализируется на создании адаптивных дизайнов и оптимизации фронтенд-кода для обеспечения быстродействия и удобства использования.',
    },
];

export const TeamCard = () => {
    return (
        <section className="team">
            <h2 className="team-title">Наша команда</h2>
            <div className="team-container">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <p className="team-description">{member.description}</p>
                        <button className="team-button">Подробнее</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

import React from "react";
import "./teamCard.css";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "../../../DB/members";

export const TeamCard = () => {
  const navigate = useNavigate();

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
            <button
              className="team-button"
              onClick={() => navigate(`/participant/${member.id}`)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

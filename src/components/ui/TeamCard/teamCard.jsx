import React from "react";
import "./teamCard.css";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "../../../DB/members";
import { Button } from "../../../shared/ui";

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
            <Button
              color="#2563eb"
              func={() => navigate(`/participant/${member.id}`)}
              title="Подробнее"
              type="circle"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "../../../DB/members";
import { Button, CheckBox, Badge} from "../../../shared/ui";

import "./teamCard.scss";

const getFormattedData = (isFavourites) => {
  if (!isFavourites) return teamMembers;
  let items = localStorage.getItem("favouriteItems");
  if (!items) return [];
  items = JSON.parse(items);
  return teamMembers.filter((i) => items.includes(String(i.id)));
};

export const TeamCard = ({ isFavourites = false, isFavouritesView = true }) => {

    const navigate = useNavigate();
    const [isFavouriteState, setIsFavouriteState] = useState(isFavourites);

    let teamData = getFormattedData(isFavouriteState);
    return (
        <section className="team">
            <h2 className="team-title">Наша команда</h2>
            {isFavouritesView && <CheckBox onClick={() => setIsFavouriteState((prevState) => !prevState)} />}
            <div className="team-container">
                {teamData.length > 0 ? (
                    teamData.map((member) => (
                        <div key={member.id} className="team-card">
                            <img src={member.photo} alt={member.name} className="team-photo" />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-description">{member.description}</p>
                            <Button
                                color="#2563eb"
                                func={() => navigate(`/team/${member.id}`)}
                                title="Подробнее"
                                type="circle"
                            />
                        </div>
                    ))
                ) : (
                    <div className="team-not-found">Избранное отсутствует...</div>
                )}
            </div>
        </section>
    );
};

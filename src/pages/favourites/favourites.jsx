import { TeamCard } from "../../components/ui";

export const Favourites = () => (
  <div className="team-cards">
    <TeamCard isFavourites={true} isFavouritesView={false} />
  </div>
);

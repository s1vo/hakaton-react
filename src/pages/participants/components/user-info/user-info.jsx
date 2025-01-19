import React, { useEffect, useState } from "react";
import { ReactComponent as FavouritesIcon } from "../../icons/reshot-icon-heart-blank-QGHC54V7P8.svg";
import { useParams } from "react-router-dom";
import { UserImage } from "../user-image-container/user-imgae-container";
import { teamMembers } from "../../../../DB/members";
import { ProgressBarContainer } from "../../../../shared/ui/progress/progress";
import { progressData } from "../../constants/progress";
import styles from "./user-info.module.scss";

export const UserInfo = ({ userId }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const { id } = useParams();
  const onFavouriteClick = () => {
    let newItems = [];
    if (isFavourite) {
      const filteredItems = favouriteItems.filter((itemID) => itemID !== id);
      if (filteredItems.length === 0) {
        localStorage.removeItem("favouriteItems");
      } else {
        newItems = filteredItems;
        localStorage.setItem("favouriteItems", JSON.stringify(newItems));
      }
    } else {
      newItems = [...favouriteItems, id];
      localStorage.setItem("favouriteItems", JSON.stringify(newItems));
    }
    setFavouriteItems(newItems);
    setIsFavourite((prevState) => !prevState);
  };
  useEffect(() => {
    let itemIds = localStorage.getItem("favouriteItems");
    if (!itemIds) return;
    itemIds = JSON.parse(itemIds);
    setFavouriteItems(itemIds);
    setIsFavourite(!!itemIds.find((itemID) => itemID === id));
  }, []);
  return (
    <div className={styles.infoContainer}>
      <UserImage userId={userId} teamMembers={teamMembers} />
      <div className={styles.aboutMeContainer}>
        <div>
          <h1>Задачи на проекте</h1>
          <div>{teamMembers[userId].role}</div>
        </div>
        <div>
          <h1>О себе</h1>
          <div>{teamMembers[userId].description}</div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <h1>Уровень навыков</h1>
        <div className="progressBar">
          <ProgressBarContainer type={"polar"} props={progressData} />
        </div>
      </div>
      <div>
        <FavouritesIcon
          className={styles.favouritesIcon + ` ${isFavourite ? styles.favourite : ""}`}
          onClick={onFavouriteClick}
        />
      </div>
    </div>
  );
};

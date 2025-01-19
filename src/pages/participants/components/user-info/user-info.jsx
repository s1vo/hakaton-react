import React, { useEffect, useState } from "react";
import { ReactComponent as FavouritesIcon } from "../../icons/reshot-icon-heart-blank-QGHC54V7P8.svg";
import styles from "./user-info.module.scss";
import { ProgressBar } from "../../../../components/ui";
import { useParams } from "react-router-dom";

const progressData = [
  {
    label: "HTML",
    value: 25,
    color: "red",
  },
  {
    label: "JavaScript",
    value: 50,
    color: "orange",
  },
  {
    label: "CSS",
    value: 30,
    color: "blue",
  },
];

export const UserInfo = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState({});
  const { id } = useParams();
  const onFavouriteClick = () => {
    if (!favouriteItems) {
      localStorage.setItem("favouriteItems", JSON.stringify({ [id]: !isFavourite }));
    } else {
      localStorage.setItem("favouriteItems", JSON.stringify({ ...favouriteItems, [id]: !isFavourite }));
    }

    setIsFavourite((prevState) => !prevState);
  };
  useEffect(() => {
    let items = localStorage.getItem("favouriteItems");
    if (!items) return;
    items = JSON.parse(items);
    setFavouriteItems(items);
    setIsFavourite(items[id]);
  }, []);
  return (
    <div className={styles.infoContainer}>
      <div className={styles.aboutMeContainer}>
        <div>
          <h1>О себе</h1>
          <div>Нормальный тип</div>
        </div>
        <div>
          <h1>Задачи на проекте</h1>
          <div>Всякая хуйня</div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <h1>Уровень навыков</h1>
        <div className="progressBar">
          <ProgressBar type={"polar"} props={progressData} />
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

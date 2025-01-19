import React, { useEffect, useState } from "react";
import { ReactComponent as FavouritesIcon } from "../../icons/reshot-icon-heart-blank-QGHC54V7P8.svg";
import { useParams } from "react-router-dom";
import { Badge, ProgressBarContainer, Expandable } from "../../../../shared/ui/";
import { progressData } from "../../constants/progress";
import { teamMembers } from "../../../../DB/members";
import styles from "./user-info.module.scss";

export const UserInfo = () => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [favouriteItems, setFavouriteItems] = useState([]);
    const { id } = useParams();
    const userId = parseInt(id, 10);

    const user = teamMembers.find((member) => member.id === userId); // Поиск пользователя

    const onFavouriteClick = () => {
        let newItems = [];

        if (isFavourite) {
            newItems = favouriteItems.filter((itemID) => itemID !== id);
            if (newItems.length === 0) {
                localStorage.removeItem("favouriteItems");
            } else {
                localStorage.setItem("favouriteItems", JSON.stringify(newItems));
            }
        } else {
            newItems = [...favouriteItems, id];
            localStorage.setItem("favouriteItems", JSON.stringify(newItems));
        }
        setFavouriteItems(newItems);
        setIsFavourite(!isFavourite);
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("favouriteItems")) || [];
        setFavouriteItems(storedItems);
        setIsFavourite(storedItems.includes(id));
    }, [id]);

    if (!user) {
        return (
            <div className={styles.infoContainer}>
                <p style={{ fontSize: "1.2em", fontWeight: "700", color: "red" }}>
                    Пользователь с ID {id} не найден.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.infoContainer}>
            <div className={styles.userCard}>
                <FavouritesIcon
                    className={`${styles.favouritesIcon} ${isFavourite ? styles.favourite : ""}`}
                    onClick={onFavouriteClick}
                />
                <div className={styles.userImageContainer}>
                    <div className="userInfo">
                        <img src={user.photo} alt={user.name} />
                        <div style={{ fontSize: "1.2em", fontWeight: "800" }}>{user.name}</div>
                        <div>Возраст: {user.age}</div>
                    </div>
                    <div
                        className="userLinks"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "80%",
                        }}
                    >
                        <Badge colorClass="badge-primary">ВКонтакте</Badge>
                        <Badge colorClass="badge-primary">Telegram</Badge>
                        <Badge colorClass="badge-secondary">GitHub</Badge>
                    </div>
                </div>
                <div className={styles.detailsContainer}>
                    <div className="section">
                        <h1 style={{ fontSize: "1.3em", fontWeight: "800" }}>Задачи на проекте</h1>
                        <ul>
                            {user.tasks?.length > 0 ? (
                                user.tasks.map((task, index) => (
                                    <li key={index} style={{ fontSize: "1.4em" }}>
                                        {task}
                                    </li>
                                ))
                            ) : (
                                <li style={{ fontSize: "1em", color: "gray" }}>Нет задач.</li>
                            )}
                        </ul>
                    </div>

                    <div className="section">
                        <h1 style={{ fontSize: "1.3em", fontWeight: "800" }}>О себе</h1>
                        <p style={{ fontSize: "1m" }}>{user.description}</p>
                    </div>
                    <div className="section">
                        <h1 style={{ fontSize: "1.3m", fontWeight: "800" }}>Уровень навыков</h1>
                        <ProgressBarContainer type="line" props={progressData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

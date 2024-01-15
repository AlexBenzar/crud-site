import styles from "./ProfileCard.module.scss";
import { Typography } from "common/index";
import { Avatar } from "img";
import { ModifyCard } from "./ModifyCard";
import { useState } from "react";
import { ProfileType } from "types/index";

export const ProfileCard: React.FC<ProfileType> = ({ photo, birthdate, city, full_name, gender }) => {
  const [isHover, setIsHover] = useState(false);
  const info = [
    ["gender", gender],
    ["birthdate", new Date(birthdate).toISOString().split("T")[0]],
    ["Location", city],
  ];
  return (
    <div className={styles.card} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div className={styles.card__main}>
        <div className={styles.card__img}>
          <img src={photo ?? Avatar} alt="Avatar" />
        </div>
        <div className={styles.card__name}>{full_name}</div>
      </div>
      <div className={styles.card__additional}>
        {info.map(([key, item], index) => (
          <div key={index} className={styles.card__info}>
            <Typography variant="body-2" className={styles.card__text}>
              {key}:
            </Typography>
            <Typography variant="body-2">{item}</Typography>
          </div>
        ))}
      </div>
      <ModifyCard isHover={isHover} />
    </div>
  );
};

import styles from "./ProfileCard.module.scss";
import { Typography } from "common/index";
import { Avatar } from "img";
import { ModifyCard } from "./ModifyCard";
import { useState } from "react";
import { ProfileType } from "types/index";

export const ProfileCard: React.FC<ProfileType> = ({ birthdate, city, full_name, gender }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.card} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div className={styles.card__main}>
        <div className={styles.card__img}>
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className={styles.card__name}>{full_name}</div>
      </div>
      <div className={styles.card__additional}>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            gender:
          </Typography>
          <Typography variant="body-2">{gender}</Typography>
        </div>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            birthdate:
          </Typography>
          <Typography variant="body-2">{new Date(birthdate).toISOString().split("T")[0]}</Typography>
        </div>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            location:
          </Typography>
          <Typography variant="body-2">{city}</Typography>
        </div>
      </div>
      <ModifyCard isHover={isHover} />
    </div>
  );
};

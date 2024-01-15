import styles from "./ProfileCard.module.scss";
import { Typography } from "common/index";
import { Avatar } from "img";
import { ModifyCard } from "./ModifyCard";
import { useState } from "react";

export const ProfileCard: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.card} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div className={styles.card__main}>
        <div className={styles.card__img}>
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className={styles.card__name}>John Duke</div>
      </div>
      <div className={styles.card__additional}>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            gender:
          </Typography>
          <Typography variant="body-2">male</Typography>
        </div>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            birthdate:
          </Typography>
          <Typography variant="body-2">25.03.2003</Typography>
        </div>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            location:
          </Typography>
          <Typography variant="body-2">Kyiv</Typography>
        </div>
        <div className={styles.card__info}>
          <Typography variant="body-2" className={styles.card__text}>
            phone:
          </Typography>
          <Typography variant="body-2">0973468932</Typography>
        </div>
      </div>
      <ModifyCard isHover={isHover} />
    </div>
  );
};

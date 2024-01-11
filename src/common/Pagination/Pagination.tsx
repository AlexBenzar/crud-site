import { PaginationType } from "types/index";
import { Typography } from "..";
import styles from "./Pagination.module.scss";

export const Pagination: React.FC<PaginationType> = ({ page, setPage, total, ...props }) => {
  function goToPrevUsers() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function goToNextUsers() {
    if (page < total) {
      setPage(page + 1);
    }
  }
  return (
    <div className={`${props.className} ${styles.pagination}`}>
      <Typography variant="body-1" className={styles.pagination__arrow} onClick={goToPrevUsers}>
        &#60;
      </Typography>
      <Typography variant="body-1" className={styles.pagination__number}>
        {page}...{total}
      </Typography>
      <Typography variant="body-1" className={styles.pagination__arrow} onClick={goToNextUsers}>
        &#62;
      </Typography>
    </div>
  );
};

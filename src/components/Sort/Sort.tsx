import { SortType } from "types/index";
import styles from "./Sort.module.scss";
import { orderBy } from "./constant";

export const Sort: React.FC<SortType> = ({ search, order, setOrder, setSearch }) => {
  return (
    <div className={styles.sort}>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="" hidden>
          Filter
        </option>
        {orderBy.map((item, index) => (
          <option key={index} value={item[1]}>
            {item[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

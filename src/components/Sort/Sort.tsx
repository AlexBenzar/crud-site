import { SortType } from "types/index";
import styles from "./Sort.module.scss";
import { orderBy } from "./constant";
import debounce from "lodash.debounce";

export const Sort: React.FC<SortType> = ({ setOrder, setSearch }) => {
  const setSearchDebounce = debounce((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), 500);

  return (
    <div className={styles.sort}>
      <input type="text" placeholder="Search" onChange={setSearchDebounce} />
      <select onChange={(e) => setOrder(e.target.value)}>
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

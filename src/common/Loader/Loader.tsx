import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import styles from "./Loader.module.scss";

export const Loader: React.FC<IContentLoaderProps> = (props) => {
  return (
    <div className={styles.loader}>
      <ContentLoader viewBox="0 0 400 160" height={160} width={400} backgroundColor="transparent" {...props}>
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </div>
  );
};

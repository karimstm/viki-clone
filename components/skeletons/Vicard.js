import styles from "./card.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// const newHeight = (newWidth) => {
//   if (newWidth <= 0) return 0;
//   const aspectRatio = 480 / 270;
//   const new_height = newWidth / aspectRatio;
//   return new_height;
// };

function Vicard({ width }) {
  return (
    <div className={styles.skeleton}>
      <SkeletonTheme color="#525252" highlightColor="#494949">
        <div>
          <img
            className={styles.skeleton__image}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 12'%3E%3Crect width='22' height='12' fill='%23525252'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23525252'%3E.%3C/text%3E%3C/svg%3E"
            alt=""
          />
          {/* <Skeleton className={styles.skeleton__image} /> */}
        </div>
        <div className={styles.skeleton__subtitle}>
          <Skeleton width={"20%"} />
        </div>
        <div className={styles.skeleton__title}>
          <Skeleton width={"50%"} />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default Vicard;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./billboard.module.scss";

function Billboard({ children, img, background }) {
  return (
    <div className={styles.billboard__container}>
      {background}
      <picture>
        <source media="(min-width: 1600px)" srcSet={img} />
        <img src={img} alt="Flower" className="billboard__cover" />
      </picture>
      <div className={styles.billboard__details}>
        {children}
        <div className={styles.billboard__action}>
          <Link href="/flower_of_evil">
            <a>
              <FontAwesomeIcon
                className={styles.billboard__icon}
                icon={faPlay}
              />
              <span>Play</span>
            </a>
          </Link>
          <Link className="btn" href="/flower_of_evil">
            <a>
              <FontAwesomeIcon
                className={styles.billboard__icon}
                icon={faPlus}
              />
              <span>Watch List</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Billboard;

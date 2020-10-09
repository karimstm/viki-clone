import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./showHeader.module.scss";
import Link from "next/link";
import { Button } from "react-bootstrap";

function ShowHeader() {
  return (
    <div className={styles.show__header}>
      <div className={styles.show__right}>
        <div className={styles.show__info}>
          <div className={styles.show__title}>
            <h2>I-LAND</h2>
            <div className={styles.show__r}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.show__rating__icon}
              />
              <h4>9.5</h4>
              <span className={styles.small}>(13,142)</span>
            </div>
          </div>
          <div className={styles.original__title}>
            <h4>날 녹여주오</h4>
          </div>
          <div className={styles.air_details}>
            <span className={styles.air_year}>2019</span>
            <span className={styles.air_rating}>PG-13</span>
            <span className={styles.studio}>TvN</span>
          </div>
          <div className={styles.sub__details}>
            <div>
              <span className={styles.label}>Genres</span>
              <span>
                <Link href="/">Romantic Comedy</Link>
                <Link href="/">Korean Drama</Link>
                <Link href="/">Crime & Mystery</Link>
              </span>
            </div>
            <div>
              <span className={styles.label}>Cast</span>
              <span>
                <Link href="/">Ji Chang Wook</Link>
                <Link href="/">Won Jin Ah</Link>
                <Link href="/">Crime & Mystery</Link>
              </span>
            </div>
          </div>
          <div className={styles.show_actions}>
            <div>
              <Link href="/">
                <a className="btn btn-primary btn-block py-2">
                  <FontAwesomeIcon icon={faPlay} /> Ep.1
                </a>
              </Link>
            </div>
            <div>
              <Button variant="dark" className="btn-block py-2">
                <FontAwesomeIcon icon={faPlus} /> Watch List
              </Button>
            </div>
          </div>
          <div className={styles.sub__details}>
            <div>
              <span className={styles.label}>Subtitles</span>
              <span>
                <Link href="/">English - Crech - Spanish and 25 more</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.show__cover}>
        <img
          className={styles.cover}
          src="https://6.vikiplatform.com/image/09e003993eb248a0af5e29ac2585bad9.jpg?x=b&a=0x0&s=1600x900&e=t&q=g"
          alt=""
        />
        <div className={styles.dorp__shadow}></div>
      </div>
    </div>
  );
}

export default ShowHeader;

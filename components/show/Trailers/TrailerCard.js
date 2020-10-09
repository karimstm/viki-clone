import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./trailerCard.module.scss";
import moment from 'moment';
import { useEffect } from "react";

library.add(faPlayCircle);

function TrailerCard({ data: { id, titles, images, subtitle_completions, duration, number } }) {

  return (
    <div className={styles.play__video__card}>
      <Link href="/">
        <a>
          <div className={styles.play__video__image}>
            <img src={`${images?.poster?.url}&s=480x270&e=t&q=g`} alt="" />
            <div className={styles.play__icon__hover}>
              <FontAwesomeIcon icon={["far", "play-circle"]} />
            </div>
            <div className={styles.ep__number}>
              {number ? `Ep ${number}` : ''}
            </div>
          </div>
          <div className={styles.play__video__details}>
            <div className={styles.play__video__sub}>
              {subtitle_completions?.en ? (
                <span>EN {subtitle_completions?.en}%</span>
              ) : <span></span>}
              <span>{duration && moment.utc(duration * 1000).format('HH:mm:ss')}</span>
            </div>
            <div className={styles.play__video__title}>
              <h4>{titles?.en}</h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default TrailerCard;

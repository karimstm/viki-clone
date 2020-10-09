import Link from "next/link";
import styles from "./cast.module.scss";

function CastCard({ img, name, role }) {
  return (
    <li className={styles.cast__list__item}>
      <Link href="/">
        <a>
          <div className={styles.cast__image__container}>
            <div>
              <img className={styles.cast__img} src={img} alt={name} />
            </div>
          </div>
          <div className={styles.cast__info}>
            <span className={styles.cast__name}>{name}</span>
            <span className={styles.cast__role}>{role}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default CastCard;

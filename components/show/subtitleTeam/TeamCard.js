import Link from "next/link";
import styles from "./TeamCard.module.scss";

function TeamCard({ img, name, role }) {
  return (
    <li className={styles.team__list__item}>
      <Link href="/">
        <a>
          <div className={styles.team__image__container}>
            <div>
              <img className={styles.team__img} src={img} alt={name} />
            </div>
          </div>
          <div className={styles.team__info}>
            <span className={styles.team__name}>{name}</span>
            <span className={styles.team__role}>{role}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default TeamCard;

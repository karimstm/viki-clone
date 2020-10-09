import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./seactionHeader.module.scss";

function SectionHeader({ title, icon }) {
  return (
    <div className={styles.section__header}>
      <FontAwesomeIcon className={styles.section__header__icon} icon={icon} />
      <h3>{title}</h3>
    </div>
  );
}

export default SectionHeader;

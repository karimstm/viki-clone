import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./sectionHeader";
import styles from "./cast.module.scss";
import CastCard from "./castCard";

const casts = [
  {
    id: 1,
    img: "https://i.imgur.com/U2aGNMq.jpg",
    name: "Ji Chang Wook",
    role: "Main Cast",
  },
  {
    id: 2,
    img: "https://i.imgur.com/h2y7ube.jpg",
    name: "Won Jin Ah",
    role: "Main Cast",
  },
  {
    id: 3,
    img: "https://i.imgur.com/cKD1FVg.jpg",
    name: "Yoon Se Ah",
    role: "Supporting Cast",
  },
];

function ShowCast() {
  return (
    <div className={styles.show__case}>
      <SectionHeader icon={faPlay} title="Cast" />
      <div className={styles.show__cast__container}>
        <ul className={styles.cast__list}>
          {casts?.map((cast) => {
            return (
              <CastCard
                img={cast.img}
                key={cast.id}
                name={cast.name}
                role={cast.role}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShowCast;

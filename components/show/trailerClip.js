import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import cn from "classnames";
import styles from "./trailer.clip.module.scss";
import ListClips from "./Trailers/listClips";
const { default: SectionHeader } = require("./sectionHeader");

function TrailerClip() {
  const [key, setKey] = useState("clips");
  return (
    <div className={styles.show__trailer__clip}>
      <SectionHeader title="Trailers & Clips" icon={faPlay} />
      <div className="show_trailer__tab">
        <Tabs
          className={styles.show__tabs__list}
          id="show_trailer_tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab
            eventKey="clips"
            title="Clips"
            tabClassName={`${styles.single__tab} ${cn({
              [styles.activet]: key === "clips",
            })}`}
          >
            <ListClips type="clips" />
          </Tab>
          <Tab
            tabClassName={`${styles.single__tab} ${cn({
              [styles.activet]: key === "trailers",
            })}`}
            eventKey="trailers"
            title="Trailers"
          >
            <ListClips type="trailers" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TrailerClip;

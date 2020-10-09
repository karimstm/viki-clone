import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import EpisodeAbout from "./episodeAbout";
import EpisodeTab from "./EpisodesTab/episodeTab";
import styles from "./showtab.module.scss";
import TabContents from "./tabContents";
import TeamTab from './subtitleTeam/TeamTab';

function ShowTab() {
  const [key, setKey] = useState("about");

  return (
    <div className={styles.show__tab}>
      <Tabs
        className={styles.show__tabs__list}
        id="show-page-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          tabClassName={`${styles.single__tab} ${key == "about" ? styles.activet : ""
            }`}
          eventKey="about"
          title="About"
        >
          <TabContents>
            <EpisodeAbout />
          </TabContents>
        </Tab>
        <Tab
          tabClassName={`${styles.single__tab} ${key == "episodes" ? styles.activet : ""
            }`}
          eventKey="episodes"
          title="Episodes"
        >
          <TabContents>
            <EpisodeTab />
          </TabContents>
        </Tab>
        <Tab
          tabClassName={`${styles.single__tab} ${key == "subtitle_team" ? styles.activet : ""
            }`}
          eventKey="subtitle_team"
          title="Subtitle team"
        >
          <TabContents>
            <TeamTab />
          </TabContents>
        </Tab>
        <Tab
          tabClassName={`${styles.single__tab} ${key == "re_com" ? styles.activet : ""
            }`}
          eventKey="re_com"
          title="Review & Comments"
        >
          <TabContents>
            <h1>In progress</h1>
          </TabContents>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ShowTab;

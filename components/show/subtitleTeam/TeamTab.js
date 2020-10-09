import React, { useState, useEffect } from "react";
import SectionHeader from "../sectionHeader";
import {
  faPlay,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TeamTab.module.scss";
import { Tab, Tabs } from "react-bootstrap";
import cn from "classnames";
import axios from "../../../config/axios";
import Vikiteam from "../../resources/contributors.json";
import TeamCard from "./TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamTab() {
  const [key, setKey] = useState("all");
  const [contributors, setContributors] = useState({});
  const [collapse, setCollapse] = useState(true);

  const concatTeam = () => {
    let team = [];
    team = team.concat(contributors.managers);
    team = team.concat(contributors.moderators);
    team = team.concat(contributors.subtitlers);
    team = team.concat(contributors.segmenters);
    return team;
  };

  useEffect(() => {
    console.log(Vikiteam);
    setContributors(Vikiteam);
  }, []);

  return (
    <div className={styles.team__tab}>
      <div className={styles.team__tab__list}>
        <SectionHeader icon={faPlay} title="Meet the team" />
        <div>
          <Tabs
            className={styles.team__tabs__list}
            id="show_team_tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab
              eventKey="all"
              title="All"
              tabClassName={`${styles.single__tab} ${cn({
                [styles.activet]: key === "all",
              })}`}
            >
              <ul
                className={`${styles.team__list} ${cn({
                  [styles.collapse__body]: collapse == true,
                  [styles.uncollapse__body]: collapse == false,
                })}`}
              >
                {concatTeam()?.map((member) => (
                  <TeamCard
                    key={member?.id}
                    role={member?.role}
                    img={member?.user.images.avatar?.url}
                    name={member?.user.username}
                  />
                ))}
              </ul>
              <div
                onClick={() => setCollapse((collapse) => !collapse)}
                className={`${styles.vi__collapse} ${cn({
                  [styles.vi__collapse__shadow]: collapse,
                  "": !collapse,
                })} text-center`}
              >
                {collapse ? (
                  <>
                    <span className="mr-2">Read More</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Collapse</span>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </>
                )}
              </div>
            </Tab>
            <Tab
              tabClassName={`${styles.single__tab} ${cn({
                [styles.activet]: key === "channel_manager",
              })}`}
              eventKey="channel_manager"
              title="Channel Manager"
            >
              <ul
                className={`${styles.team__list} ${cn({
                  [styles.collapse__body]: collapse == true,
                  [styles.uncollapse__body]: collapse == false,
                })}`}
              >
                {contributors["managers"]?.map((member) => (
                  <TeamCard
                    key={member?.id}
                    role={member?.role}
                    img={member?.user.images.avatar?.url}
                    name={member?.user.username}
                  />
                ))}
              </ul>
              <div
                onClick={() => setCollapse((collapse) => !collapse)}
                className={`${styles.vi__collapse} ${cn({
                  [styles.vi__collapse__shadow]: collapse,
                  "": !collapse,
                })} text-center`}
              >
                {collapse ? (
                  <>
                    <span className="mr-2">Read More</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Collapse</span>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </>
                )}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default TeamTab;

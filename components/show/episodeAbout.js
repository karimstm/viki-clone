import {
  faChevronDown,
  faPlay,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./episode.about.module.scss";
import cn from "classnames";
import SectionHeader from "./sectionHeader";
import ShowCast from "./showCast";
import TrailerClip from "./trailerClip";

function EpisodeAbout() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className={styles.about__container}>
      <div className={styles.about__right}>
        <div className={styles.about__contents}>
          <div className={styles.about_synopsis}>
            <SectionHeader icon={faPlay} title="Synopsis" />
            <div className={styles.sysnopsis__content}>
              <div
                className={`${styles.content_body} ${cn({
                  [styles.collapse__body]: collapse == true,
                  [styles.uncollapse__body]: collapse == false,
                })}`}
              >
                <p>
                  Go Mi Ran (Won Jin Ah) is a young jobseeker who is told she
                  will be given around US$ 4,200 if she takes part in a
                  cryogenic freezing program. She is told that she will be
                  frozen for just 24 hours and then leave with her money.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Also being frozen is Ma Dong Chan (Ji Chang Wook), a popular
                  entertainment TV producer who is cold as ice when it comes to
                  working – but tends to get hot and passionate when it comes to
                  affairs of the heart.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  But instead of waking up a day later, the duo awakes from
                  cryogenic slumber to find they have slept through 20 years.
                  All the people Mi Ran and Dong Chan once knew have aged by 20
                  years, but their own bodies and memories have not changed at
                  all.
                </p>
              </div>
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
            </div>
          </div>
          <div className="about__trailer mt-5">
            <TrailerClip />
          </div>
        </div>
      </div>
      <div className={styles.about__left}>
        <ShowCast />
      </div>
    </div>
  );
}

export default EpisodeAbout;

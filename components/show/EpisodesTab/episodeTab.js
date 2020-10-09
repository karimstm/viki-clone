import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import SectionHeader from "../sectionHeader";
import styles from "./episode.module.scss";
import ListEpisodes from "../Trailers/listEpisodes";
import EpisodesTabHeader from "./EpisodesTabHeader";

const episodes_count = 16;
const addOne = episodes_count % 10 > 0 ? 1 : 0;

function EpisodeTab() {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.episodes__tab}>
      <div className={styles.episode__tab__list}>
        <SectionHeader title={`${episodes_count} episodes`} icon={faPlay} />
        <div className={styles.episode__tab_header}>
          <div className={styles.tabs__list}>
            <EpisodesTabHeader setPage={setPage} initialIndex={1}>
              <EpisodesTabHeader.Item eventKey={1}>1-10</EpisodesTabHeader.Item>
              <EpisodesTabHeader.Item eventKey={2}>11-16</EpisodesTabHeader.Item>
            </EpisodesTabHeader>
          </div>
          <div className={styles.episodes__search}>
            <form className="d-sm-none d-md-block">
              <InputGroup className="mb-3">
                <FormControl
                  className={styles.search__input}
                  placeholder="Episode number"
                  aria-label="episode__number"
                  aria-describedby="episode-addon1"
                />
                <InputGroup.Prepend>
                  <InputGroup.Text
                    className={styles.input_prepend_search}
                    id="episode-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </form>
          </div>
        </div>
        <div className={styles.episode__list}>
          <ListEpisodes type="episodes" page={page} per_page={10} />
        </div>
      </div>
    </div>
  );
}

export default EpisodeTab;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrailerCard from "./TrailerCard";
import styles from "./trailerCard.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { Col } from "react-bootstrap";

const apiurl = (page, type, per_page) =>
  `https://api.viki.io/v4/containers/36676c/${type}.json?sort=newest_video&per_page=${per_page}&page=${page}&app=100000a`;

//Type should be either a 'clips' or 'trailers'

function ListClips({ type }) {
  const [more, setMore] = useState(false);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (page == 1) setVideos([]);
    const fetchClips = async () => {
      try {
        const res = await axios.get(apiurl(page, type, 20));
        setVideos(videos.concat(res.data?.response));
        setMore(res.data?.more || false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchClips();
  }, [page]);

  return (
    <>
      <div className={`row ${styles.play__list}`}>
        {videos.map((video) => {
          return (
            <Col key={video.id} xs={3}>
              <TrailerCard data={video} />
            </Col>
          );
        })}
      </div>
      {more && (
        <div onClick={() => setPage(page + 1)} className={styles.show__more}>
          Show more <FontAwesomeIcon icon={faChevronDown} />
        </div>
      )}
    </>
  );
}

export default ListClips;

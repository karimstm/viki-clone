import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrailerCard from "./TrailerCard";
import styles from "./trailerCard.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { Col } from "react-bootstrap";

const apiurl = (page, type, per_page) =>
  `https://api.viki.io/v4/containers/31706c/${type}.json?token=undefined&direction=asc&with_upcoming=true&sort=number&blocked=true&page=${page}&per_page=${per_page}&app=100000a`;

//Type should be either a 'clips' or 'trailers'

function ListEpisodes({ type, per_page, page }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchClips = async () => {
      try {
        const res = await axios.get(apiurl(page, type, per_page));
        setVideos(res.data?.response);
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
            <Col key={video.id} xs={12} sm={6} md={4} lg={3}>
              <TrailerCard data={video} />
            </Col>
          );
        })}
      </div>
    </>
  );
}

export default ListEpisodes;

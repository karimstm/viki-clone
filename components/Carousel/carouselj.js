import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import styles from "./carouselj.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "../../config/axios";
import PropTypes from "prop-types";
import Swiperlist from "../skeletons/swiperlist";
import Vicard from "../skeletons/Vicard";

SwiperCore.use([Navigation, A11y]);

const breakpoints = {
  1500: {
    slidesPerView: 6,
  },
  1200: {
    slidesPerView: 5,
  },
  900: {
    slidesPerView: 4,
  },
  600: {
    slidesPerView: 2,
  },
};

function Carouselj({ url, title, list, people }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDAta = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(!list ? res.data.results : res.data.items || res.data);
      } catch (error) {
        setData([]);
      }
      setLoading(false);
    };
    fetchDAta();
  }, []);

  return (
    <div className={styles.main__container}>
      <h1 className={styles.slider__title}>
        <Link href="/">
          <a>
            <span>{title}</span>
            <div className={styles.emphesise}>
              <span className={styles.see__more}>See more</span>
              <span className={styles.emphasis__l}>›</span>
            </div>
          </a>
        </Link>
      </h1>
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        slidesPerGroup={5}
        watchOverflow={true}
        navigation
        breakpoints={breakpoints}
        onBreakpoint={(e) => console.log(e)}
      >
        {loading &&
          Array(14)
            .fill()
            .map((_, i) => {
              return (
                <SwiperSlide key={i}>
                  <Vicard />
                </SwiperSlide>
              );
            })}
        {!loading &&
          data.length > 0 &&
          data?.map((item, i) => {
            return (
              <SwiperSlide key={item.id || i}>
                <Link href={`/show/${item.id}`}>
                  <a className={styles.show__item}>
                    <div className={styles.body}>
                      <div className={styles.img__container}>
                        <img
                          src={
                            item.backdrop_path
                              ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                              : item?.images?.poster?.url
                              ? item?.images?.poster?.url
                              : "https://i.imgur.com/bJ84pGj.jpg?1"
                          }
                          alt={item.original_title}
                        />
                      </div>
                      <div className={styles.body__details}>
                        {!people && (
                          <>
                            <div className={styles.body__episodes}>
                              <span>{Math.floor(Math.random() * 25)}</span>
                              <span>Episodes</span>
                            </div>
                            <div className={styles.body__rating}>
                              <span>{item.vote_average}</span>
                              <span>
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className={styles.body__rating__icon}
                                />
                              </span>
                              <span>{`(${item.vote_count} ratings)`}</span>
                            </div>
                            <div className="body__genre">
                              <span>Korea</span>
                              <span>Romantic Comedy</span>
                              <span>Korean Drama</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className={styles.footer}>
                      {!people && (
                        <span className={styles.is__free}>Watch Free</span>
                      )}
                      <span className={styles.show__name}>
                        {item.name || item.title}
                      </span>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

Carouselj.propTypes = {
  list: PropTypes.bool,
  people: PropTypes.bool,
};

Carouselj.defaultProps = {
  list: false,
  people: false,
};

export default Carouselj;

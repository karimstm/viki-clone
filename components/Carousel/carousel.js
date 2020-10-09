import styles from "./crousel.module.scss";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import cn from "classnames";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const InitSetting = {};

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={styles.carousel__prev__btn}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <div className={styles.carousel__prev__btn__item}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
}

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={styles.carousel__next__btn}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <div className={styles.carousel__next__btn__item}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

// Number of slidesToShow in
const slidesToShow = 7;

function Carousel() {
  const onChange = (i) => {
    console.log(i);
    SetIndex(i);
  };

  const [index, SetIndex] = useState(-1);
  const [settings, setSettings] = useState({
    infinite: false,
    className: "center",
    centerPadding: "90px",
    slidesToShow: 7,
    slidesToScroll: 6,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: onChange,
  });

  return (
    <div className={`${styles.slider__container}`}>
      <Slider {...settings}>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
        <div>
          <img
            src="https://6.vikiplatform.com/image/7a240d22c5674fc698ac426bd80d6d4f.jpg?x=b&a=0x0&s=480x270&e=t&q=g"
            alt="name"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

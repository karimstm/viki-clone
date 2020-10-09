import { SwiperSlide } from "swiper/react";
import Vicard from "./Vicard";

function Swiperlist() {
  return (
    <>
      {Array(14)
        .fill()
        .map((i) => {
          return (
            <SwiperSlide key={i}>
              <Vicard />
            </SwiperSlide>
          );
        })}
    </>
  );
}

export default Swiperlist;

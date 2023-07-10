import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./pagination.css";

import s from "./UISwiper.module.scss";
import cn from "classnames";

const UISwiper = () => {
  return (
    <>
      <Swiper
        // pagination={true}
        modules={[Pagination]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={window.innerWidth < 768 ? 8 : 12}
        loop={true}
        pagination={{ clickable: true }}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.blueGray)}>
            <div className={s.firstSlide}>
              <p className={s.whiteText}>
                Checking the similarity by{" "}
                <span className={s.yellowText}>123 points</span> of facial
                geometry with AI
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.peach)}>
            <div className={s.secondSlide}>
              <p className={s.whiteText}>
                Scientists speculate,{" "}
                <span className={s.blueGrayText}>we check!</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.white)}>
            <div className={s.firstSlide}>
              <p className={s.blackText}>
                <span className={s.redText}>Every minutes </span> someone checks
                their likeness{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className={cn(s.slideContainer, s.peach)}>
            <div className={s.secondSlide}>
              <p className={s.whiteText}>
                Scientists speculate,{" "}
                <span className={s.blueGrayText}>we check!</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.white)}>
            <div className={s.firstSlide}>
              <p className={s.blackText}>
                <span className={s.redText}>Every minutes </span> someone checks
                their likeness{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.blueGray)}>
            <div className={s.firstSlide}>
              <p className={s.whiteText}>
                Checking the similarity by{" "}
                <span className={s.yellowText}>123 points</span> of facial
                geometry with AI
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default UISwiper;

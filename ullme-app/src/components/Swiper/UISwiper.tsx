import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./pagination.scss";
import s from "./UISwiper.module.scss";
import cn from "classnames";

interface UISwiperProps {
  photo1: string | null;
  photo2: string | null;
  percentage: number;
  resultText?: string;
}

const defaultText =
  "In the morning after waking up you can have a feeling that you're looking in the mirror. You look so much alike!";

const UISwiper: FC<UISwiperProps> = ({
  photo1,
  photo2,
  percentage,
  resultText = defaultText,
}) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}

        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={30}
        // allowTouchMove={false}
        // loop={true}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.first)}>
            <div className={s.photosWrapper}>
              <div
                className={s.uploadedImage1}
                style={{ backgroundImage: photo1! }}
              ></div>
              <div
                className={s.uploadedImage2}
                style={{ backgroundImage: photo2! }}
              ></div>
            </div>

            <div className={s.resultContainer}>
              <p>{percentage}%</p>
              <div className={s.bar}>
                <div
                  className={s.resultNumber}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            <p className={cn(s.resultText)}>{resultText}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.second)}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.third)}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.fourth)}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cn(s.slideContainer, s.fifth)}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default UISwiper;

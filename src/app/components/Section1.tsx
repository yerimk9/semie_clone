"use client";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

function Section1() {
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <>
      <div className="swiper-container">
        <div className="title">
          <p>
            <Image src={logo} alt="logo" width={42} height={58} />
            추천드려요!
          </p>
          <h3>
            요리초보
            <br />
            가이드
          </h3>
          <button type="button">
            <span>가이드 더보기</span>
          </button>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          initialSlide={0} // 첫 번째 슬라이드로 시작
          onSlideChangeTransitionEnd={(swiperCore) => {
            setSlideIndex(+swiperCore.realIndex + 1); // onSlideChange로 변경
          }}
          className="swiper mySwiper1"
        >
          <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          initialSlide={1} // 첫 번째 슬라이드로 시작
          className="swiper mySwiper2"
        >
          <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          initialSlide={2} // 첫 번째 슬라이드로 시작
          className="swiper mySwiper3"
        >
          <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div>현재 번호: {slideIndex}</div>
    </>
  );
}

export default Section1;
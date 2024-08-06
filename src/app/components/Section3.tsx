"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ic_right from "@/../public/images/right.png";
import il_smile2 from "@/../public/images/il_samie_2.png";
import il_write from "@/../public/images/ic_write.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FoodGuideProps } from "../types";

function Section3() {
  return (
    <div className="bg_wrap">
      <div className="title">
        <h3>요리해요</h3>
        <Link href={"/cooking/list"} className="btn_arrow_lg">
          더보기
          <Image src={ic_right} alt="" width={40} height={40} />
        </Link>
      </div>
      <div className="swiper-container-bg">
        <Image
          src={"https://semie.cooking/assets/images/common/bg_frame.png"}
          alt=""
          width={1000}
          height={500}
          className="bg-img"
        />

        <div className="swiper-container-box">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            initialSlide={0}
            speed={900}
            className="swiper mySwiper1"
          >
            {[1, 2, 3, 4, 5].map((food, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Link href={"/"}>
                  <div className="img">
                    <Image
                      src={
                        "https://semie.cooking/image/board/cooking/yf/sf/uaujqtyl/144970930elnu.jpg"
                      }
                      alt="img"
                      width={204}
                      height={204}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              800: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
            initialSlide={1}
            speed={900}
            className="swiper mySwiper2"
          >
            {[1, 2, 3, 4, 5].map((food, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Link href={"/"}>
                  <div className="top_text">
                    <h4>아삭이고추 된장무침</h4>
                    <p>
                      <span>김예림</span>
                      2024.08.04 21:43
                    </p>
                  </div>
                  <div className="img">
                    <Image
                      src={
                        "https://semie.cooking/image/board/cooking/yf/sf/uaujqtyl/144970930elnu.jpg"
                      }
                      alt="img"
                      width={204}
                      height={204}
                    />
                  </div>
                  <div className="bottom_text">
                    아삭이 고추로 간단한 반찬뚝딱😁 토장과 참기름, 통깨로 쉽게
                    후다닥~ 아삭이 고추는 먹기좋은 크기로 썰어 된장양념에 무치면
                    끝~!
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            initialSlide={2}
            speed={900}
            className="swiper mySwiper3"
          >
            {[1, 2, 3, 4, 5].map((food, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Link href={"/"}>
                  <div className="img">
                    <Image
                      src={
                        "https://semie.cooking/image/board/cooking/yf/sf/uaujqtyl/144970930elnu.jpg"
                      }
                      alt="img"
                      width={204}
                      height={204}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="myfood">
        <Image src={il_smile2} alt="" width={161} height={134} />
        <div className="myfoodBtnWrap">
          <p>나만의 요리를 올려주세요!</p>
          <Link href={"/"}>
            작성하기
            <Image src={il_write} alt="" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3;

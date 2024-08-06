import Image from "next/image";
import Link from "next/link";
import React from "react";
import ic_right from "@/../public/images/right.png";
import il_smile2 from "@/../public/images/il_samie_2.png";
import il_write from "@/../public/images/ic_write.png";

function Section3() {
  return (
    <div className="bg_wrap">
      <div className="title">
        <h3>요리해요</h3>
        <Link href={"/"} className="btn_arrow_lg">
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
        />
        <div className="swiper-container-box">{/* 여기다가 스와이퍼 */}</div>
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

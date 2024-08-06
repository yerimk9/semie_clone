import Link from "next/link";
import React from "react";

function Section3() {
  return (
    <div className="bg_wrap">
      <div className="title">
        <h3>요리해요</h3>
        <Link href={"/"} className="btn_arrow_lg"></Link>
      </div>
      <div className="swiper-container-bg"></div>
      <div className="myfood"></div>
    </div>
  );
}

export default Section3;

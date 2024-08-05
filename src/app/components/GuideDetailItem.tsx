import Image from "next/image";
import Link from "next/link";
import React from "react";

function GuideDetailItem() {
  return (
    <li>
      <Link href={"/"}>
        <div className="img">
          <Image
            src={
              "https://semie.cooking/image/contents/recipe/gh/dx/jrdsgitx/121173663tluo.jpg"
            }
            alt=""
            width={1280}
            height={1280}
          />
        </div>
        <div className="text">
          <h4>별미간식 옥수수전</h4>
          <p>옥수수캔으로 고소하고 달콤한 이색 전</p>
        </div>
      </Link>
      <ul className="tagWrap">
        <li>
          <span>준비시간</span>
          10분
        </li>
        <li>
          <span>조리시간</span>
          20분
        </li>
      </ul>
      <button type="button" className="scrap">
        스크랩
      </button>
    </li>
  );
}

export default GuideDetailItem;

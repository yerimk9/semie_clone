import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FoodGuideProps } from "../types";

function FoodGuideItem({ item }: FoodGuideProps) {
  return (
    <li>
      <Link href={"/"}>
        <ul className="thumb">
          <li>
            <Image
              src={
                "https://semie.cooking/image/contents/solution/js/sa/hkagfitd/143308762rtmh.jpg"
              }
              alt=""
              width={1280}
              height={1280}
            />
          </li>
          <li>
            <Image
              src={
                "https://semie.cooking/image/contents/solution/js/sa/hkagfitd/143308762rtmh.jpg"
              }
              alt=""
              width={1280}
              height={1280}
            />
          </li>
          <li>
            <Image
              src={
                "https://semie.cooking/image/contents/solution/js/sa/hkagfitd/143308762rtmh.jpg"
              }
              alt=""
              width={1280}
              height={1280}
            />
            <p className="more_detail">자세히 보기</p>
          </li>
        </ul>
        <div className="picture">
          <Image src={item["main_img"]} alt="" width={1280} height={1280} />
          <p>
            {item["title"]}
            <span className="num">7</span>
          </p>
          <div className="text">
            요리를 시작하기 좋은 나이 10-13세!
            <br />
            스스로 요리할 수 있는 자신감을 갖도록, 함께 즐요해요!
          </div>
        </div>
      </Link>
      <button type="button" className="scrap">
        스크랩
      </button>
    </li>
  );
}

export default FoodGuideItem;

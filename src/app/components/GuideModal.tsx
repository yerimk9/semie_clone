import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ic_right from "../../../public/images/right.png";
import il_samie_1 from "../../../public/svgs/il_samie_1-1.svg";
import { FoodGuideProps, GuideModalProps } from "../types";

function GuideModal({ list, isModal, setIsModal }: GuideModalProps) {
  return (
    <div className={`guideWrap ${isModal && "block"}`}>
      <div className="guide_modal">
        <div className="guide_modal_head">
          <div className="guide_modal_head_title">
            <h3>
              <Image src={il_samie_1} alt="" width={70} height={70} />
              요리초보가이드
            </h3>
            <Link href={"/"} className="btn_arrow_lg">
              전체보기
              <Image src={ic_right} alt="" width={40} height={40} />
            </Link>
          </div>
          <button type="button" className="close" onClick={setIsModal}>
            ×
          </button>
        </div>
        <div className="guide_modal_body">
          <div className="guide_modal_cont">
            <ul>
              {list.map((food, index) => (
                <li key={index}>
                  <Link href={"/"}>
                    <div className="img">
                      <Image
                        src={food["main_img"]}
                        alt=""
                        width={1280}
                        height={1280}
                      />
                      <span className="morePic">7</span>
                    </div>
                    <div className="text">
                      <p dangerouslySetInnerHTML={{ __html: food.title }} />
                      <span>
                        엄마,아빠 &quot;최고!&quot; 소리 듣는
                        <br />
                        아이들이 좋아할 간식 레시피
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={"/"} className="allMore">
              전체보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideModal;

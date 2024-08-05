import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ic_kakao2 from "@/../public/images/ic_kakao2.png";
import ic_url from "@/../public/images/ic_url.png";
import GuideDetailItem from "@/app/components/GuideDetailItem";

function page() {
  return (
    <div>
      <Header />
      <main>
        <div className="guideDetail">
          <div className="detail_bg">
            <Image
              src={
                "https://semie.cooking/image/contents/recipe/gh/dx/jrdsgitx/121173663tluo.jpg"
              }
              alt=""
              width={1280}
              height={1280}
            />
          </div>
          <div className="detail_control">
            <div className="left">
              <Link href={"/guide/list"} className="list_btn">
                목록으로
              </Link>
            </div>
            <div className="right">
              <button type="button" className="scrap">
                스크랩
              </button>
              <div className="share_wrap">
                <button type="button" className="share">
                  공유하기
                </button>
                <ul className="share_btn">
                  <li className="close">
                    <span>공유</span>
                    <button type="button">×</button>
                  </li>
                  <li>
                    <button type="button">
                      <Image src={ic_kakao2} alt="" width={36} height={36} />
                      <span>카카오톡</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <Image src={ic_url} alt="" width={36} height={36} />
                      <span>URL복사</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="detail_wrap">
            <div className="detail_con">
              <div className="detail_title">
                <h3>주말에 하기 좋은 간식 모음.zip</h3>
                <p>
                  아이들이 좋아하는 간식 레시피만 모았어요.
                  <br />
                  주말에 아이들과 즐거운 요리시간 보내볼까요?
                </p>
                <div className="title_tag">
                  <span className="tag">아이와 함께</span>
                  <span className="tag">요리놀이</span>
                  <span className="tag">아이간식</span>
                  <span className="tag">간식</span>
                </div>
              </div>
              <ul className="tagList hashList">
                <GuideDetailItem />
                <GuideDetailItem />
                <GuideDetailItem />
                <GuideDetailItem />
                <GuideDetailItem />
                <GuideDetailItem />
                <GuideDetailItem />
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;

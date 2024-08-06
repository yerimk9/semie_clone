import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import il_smile4 from "@/../public/images/il_samie_4.png";
import il_write from "@/../public/images/ic_write.png";
import CounselingListItem from "@/app/components/CounselingListItem";

function page() {
  return (
    <div>
      <Header />

      <main>
        <div className="labList">
          <div className="subTitle">
            <h3>요리해요</h3>
          </div>

          <div className="tab">
            <ul>
              <li>
                <button type="button">요리해요</button>
              </li>
              <li className="on">
                <button type="button">고민있어요</button>
              </li>
            </ul>
          </div>

          <div className="myfood v2">
            <Image src={il_smile4} alt="" width={161} height={134} />
            <div className="myfoodBtnWrap">
              <p>
                요리에 대한 모든 고민
                <br />
                <span>
                  고민이 있으세요? 지금 고민을 남기고 함께 해결방안을 찾아봐요!
                </span>
              </p>
              <Link href={"/"}>
                작성하기
                <Image src={il_write} alt="" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="detail_wrap">
            <div className="detail_con">
              <div className="filter">
                <p>스크랩순</p>
                <ul>
                  <li>
                    <Link href={"/"}>최신순</Link>
                  </li>
                  <li>
                    <Link href={"/"}>조회순</Link>
                  </li>
                  <li className="on">
                    <Link href={"/"}>스크랩순</Link>
                  </li>
                </ul>
              </div>

              <ul className="cardList">
                <li>
                  <CounselingListItem />
                </li>
              </ul>
              <div className="middle_bn">
                <Link href={"/"}>
                  <Image
                    src={
                      "https://semie.cooking/image/index/2024/07/143462772kabf.png"
                    }
                    alt=""
                    className="pc-show"
                    width={1496}
                    height={160}
                  />
                  <Image
                    src={
                      "https://semie.cooking/image/index/2024/07/143462775lvhq.png"
                    }
                    alt=""
                    className="mb-show"
                    width={690}
                    height={200}
                  />
                </Link>
              </div>
            </div>

            <div className="pagination">
              <button type="button" className="prev">
                <i className="icon_prev">이전페이지</i>
              </button>
              <span className="page_p">
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>

                <button type="button" className="act">
                  5
                </button>
              </span>
              <button type="button" className="next">
                <i className="icon_next">다음페이지</i>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default page;

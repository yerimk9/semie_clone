import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import il_smile4 from "@/../public/images/il_samie_4.png";
import il_write from "@/../public/images/ic_write.png";
import CounselingListItem from "@/app/components/CounselingListItem";
import Filter from "@/app/components/Filter";

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
                <Link href={"/cooking/list"}>요리해요</Link>
              </li>
              <li className="on">
                <Link href={"/counseling/list"}>고민있어요</Link>
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
              <Filter list={["최신순", "조회순", "스크랩순"]} />

              <ul className="cardList">
                <li>
                  <CounselingListItem />
                </li>
                <li>
                  <CounselingListItem />
                </li>
                <li>
                  <CounselingListItem />
                </li>
                <li>
                  <CounselingListItem />
                </li>
                <li>
                  <CounselingListItem />
                </li>
                <li>
                  <CounselingListItem />
                </li>
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
              <Link href={"/"} className="prev">
                <i className="icon_prev">이전페이지</i>
              </Link>
              <span className="page_p">
                <Link href={"/"}>1</Link>
                <Link href={"/"}>2</Link>
                <Link href={"/"}>3</Link>
                <Link href={"/"}>4</Link>

                <Link href={"/"} className="act">
                  5
                </Link>
              </span>
              <Link href={"/"} className="next">
                <i className="icon_next">다음페이지</i>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default page;

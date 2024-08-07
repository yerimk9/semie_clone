import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import il_smile2 from "@/../public/images/il_samie_2.png";
import il_write from "@/../public/images/ic_write.png";
import CookingListItem from "@/app/components/CookingListItem";
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
              <li className="on">
                <Link href={"/cooking/list"}>요리해요</Link>
              </li>
              <li>
                <Link href={"/counseling/list"}>고민있어요</Link>
              </li>
            </ul>
          </div>

          <div className="myfood">
            <Image src={il_smile2} alt="" width={161} height={134} />
            <div className="myfoodBtnWrap">
              <p>
                나만의 요리를 올려주세요!
                <br />
                <span>
                  나만의 요리법, 재밌는 플레이팅, 요리 꿀팁 등 다양한 이야기를
                  새미네부엌에서 함께 나눠 주세요!
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

              <ul className="hashList">
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
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

              <ul className="hashList">
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
                <li>
                  <CookingListItem />
                </li>
              </ul>
            </div>

            <div className="pagination">
              <button className="prev">
                <i className="icon_prev">이전페이지</i>
              </button>
              <span className="page_p">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>

                <button className="act">5</button>
              </span>
              <button className="next">
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

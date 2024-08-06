import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";
import il_wow from "../../../../public/images/il_wow.png";
import Link from "next/link";
import EventItem from "@/app/components/EventItem";

function page() {
  return (
    <div>
      <Header />

      <main>
        <div className="eventList">
          <div className="subTitle">
            <h3>
              <Image src={il_wow} alt="il_wow" width={170} height={94} />
              이벤트
            </h3>
          </div>
          <div className="eventList_wrap">
            <div className="filter">
              <p>전체</p>
              <ul>
                <li className="on">
                  <Link href={"/"}>전체</Link>
                </li>
                <li>
                  <Link href={"/"}>진행중</Link>
                </li>
                <li>
                  <Link href={"/"}>종료</Link>
                </li>
                <li>
                  <Link href={"/"}>당첨자발표</Link>
                </li>
              </ul>
            </div>
            <ul className="event_list">
              <li>
                <EventItem
                  imgUrl={
                    "https://semie.cooking/image/post/event/jb/kc/cmdvdiud/142360554jclp.png"
                  }
                  status={"진행중"}
                />
              </li>
              <li>
                <EventItem
                  imgUrl={
                    "https://semie.cooking/image/post/event/wu/kx/hziawcig/141152250tlwf.jpg"
                  }
                  status={"종료"}
                />
              </li>
              <li>
                <EventItem
                  imgUrl={
                    "https://semie.cooking/image/post/event/or/tv/bhtlspir/140466786lgtg.jpg"
                  }
                  status={"당첨자 발표"}
                />
              </li>
            </ul>
            <div className="pagination">
              <button type="button" className="prev">
                <i className="icon_prev">이전페이지</i>
              </button>
              <span className="page_p">
                <button type="button">1</button>

                <button type="button" className="act">
                  2
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

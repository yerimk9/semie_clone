import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";
import il_wow from "../../../../public/images/il_wow.png";
import button from "next/button";
import EventItem from "@/app/components/EventItem";
import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "@/firebase";
import { WowListItemProps } from "@/app/types";
import Filter from "@/app/components/Filter";

const pageClick = async (startAfterDoc = null) => {
  let wowList: WowListItemProps["item"][] = [];
  let querySnapshot;

  const baseQuery = query(collection(db, "wow"), orderBy("date"), limit(9));

  if (startAfterDoc) {
    querySnapshot = await getDocs(query(baseQuery, startAfter(startAfterDoc)));
  } else {
    querySnapshot = await getDocs(baseQuery);
  }

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    wowList.push(data as WowListItemProps["item"]);
  });

  return {
    wowList,
    lastVisibleDoc: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
  };
};

async function page() {
  let wowList: WowListItemProps["item"][] = [];

  try {
    const { wowList: newWowList, lastVisibleDoc } = await pageClick();
    wowList = newWowList; // Ensure wowList is of type WowListItemProps["item"][]
  } catch (e) {
    console.log(e);
  }

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
            {/* <div className="filter">
              <p>전체</p>
              <ul>
                <li className="on">
                  <button type="button">전체</button>
                </li>
                <li>
                  <button type="button">진행중</button>
                </li>
                <li>
                  <button type="button">종료</button>
                </li>
                <li>
                  <button type="button">당첨자발표</button>
                </li>
              </ul>
            </div> */}
            <Filter list={["전체", "진행중", "종료", "당첨자발표"]} />
            <ul className="event_list">
              {wowList.map((item, idx) => (
                <li key={idx}>
                  <EventItem item={item} />
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button type="button" className="prev">
                <i className="icon_prev">이전페이지</i>
              </button>
              <span className="page_p">
                <button type="button" className="act">
                  1
                </button>

                <button type="button">2</button>
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

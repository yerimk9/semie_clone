import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";
import il_wow from "../../../../../public/images/il_wow.png";
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
import Link from "next/link";

const pageClick = async (page: number) => {
  let wowList: WowListItemProps["item"][] = [];
  let querySnapshot;

  const pageSize = 9;

  const baseQuery = query(
    collection(db, "wow"),
    orderBy("date"),
    limit(pageSize)
  );

  if (page === 1) {
    querySnapshot = await getDocs(baseQuery);
  } else {
    const prevPageSnapshot = await getDocs(baseQuery);
    const lastDoc = prevPageSnapshot.docs[prevPageSnapshot.docs.length - 1];

    querySnapshot = await getDocs(query(baseQuery, startAfter(lastDoc)));
  }

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    wowList.push(data as WowListItemProps["item"]);
  });

  return {
    wowList,
  };
};

async function page({ params }: { params: { page: string } }) {
  let wowList: WowListItemProps["item"][] = [];
  let currentPage = parseInt(params.page, 10);

  try {
    const { wowList: newWowList } = await pageClick(currentPage);
    wowList = newWowList;
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
            <Filter list={["전체", "진행중", "종료", "당첨자발표"]} />
            <ul className="event_list">
              {wowList.map((item, idx) => (
                <li key={idx}>
                  <EventItem item={item} />
                </li>
              ))}
            </ul>
            <div className="pagination">
              <Link href={"/"} className="prev">
                <i className="icon_prev">이전페이지</i>
              </Link>
              <span className="page_p">
                <Link href={`/wow/1`} className="act">
                  1
                </Link>

                <Link href={`/wow/2`}>2</Link>
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

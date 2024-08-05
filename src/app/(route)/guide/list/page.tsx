import FoodGuideItem from "@/app/components/FoodGuideItem";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { FoodGuide } from "@/app/types";
import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import React from "react";

export default async function page() {
  let foodItems: FoodGuide[] = [];

  try {
    // Firestore에서 데이터 가져오기
    const querySnapshot = await getDocs(
      query(collection(db, "food_guide_list"))
    );

    querySnapshot.forEach((doc) => {
      const data = doc.data() as FoodGuide;
      foodItems.push(data);
    });
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      <Header />

      <main className="guide_list_main">
        <div className="guideList">
          <div className="subTitle">
            <h3>요리초보가이드</h3>
          </div>
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
          <ul>
            {foodItems.map((food, idx) => (
              <FoodGuideItem key={idx} item={food} />
            ))}
          </ul>
          <div className="pagination">
            <button type="button" className="prev">
              <i className="icon_prev">이전페이지</i>
            </button>
            <span className="page_p">
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button" className="act">
                3
              </button>
              <button type="button">4</button>
            </span>
            <button type="button" className="next">
              <i className="icon_next">다음페이지</i>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Filter from "@/app/components/Filter";
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

  /*  try {
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
  } */

  return (
    <div>
      <Header />

      <main>
        <div className="guideList">
          <div className="subTitle">
            <h3>요리초보가이드</h3>
          </div>

          <Filter list={["최신순", "조회순", "스크랩순"]} />
          <ul>
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
            <FoodGuideItem />
          </ul>
          <div className="pagination">
            <Link href={"/"} className="prev">
              <i className="icon_prev">이전페이지</i>
            </Link>
            <span className="page_p">
              <Link href={"/"}>1</Link>
              <Link href={"/"}>2</Link>
              <Link href={"/"} className="act">
                3
              </Link>
              <Link href={"/"}>4</Link>
            </span>
            <Link href={"/"} className="next">
              <i className="icon_next">다음페이지</i>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

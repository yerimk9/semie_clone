import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import { FoodGuide } from "./types";
import FoodGuideItem from "./components/FoodGuideItem";
import Image from "next/image";

import Link from "next/link";
import Section4 from "./components/Section4";
import Section3 from "./components/Section3";

export default async function Home() {
  let foodItems: FoodGuide[] = [];
  // try {
  //   // Firestore에서 데이터 가져오기
  //   const querySnapshot = await getDocs(
  //     query(collection(db, "food_guide_list"))
  //   );

  //   querySnapshot.forEach((doc) => {
  //     const data = doc.data() as FoodGuide;
  //     foodItems.push(data);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  return (
    <div>
      <Header />

      <main>
        <div className="section1">
          {/* <Section1 list={foodItems} /> */}
          <Section1 />
        </div>

        <div className="section3">
          {/* <Section3 list={foodItems} /> */}
          <Section3 />
        </div>

        <div className="section4">
          <Section4 />
        </div>
      </main>
      <Footer />
    </div>
  );
}

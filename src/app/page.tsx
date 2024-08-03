import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import { FoodGuide } from "./types";

export default async function Home() {
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

      <div className="section1">
        <Section1 list={foodItems} />
      </div>
      <div className="h-screen"></div>

      <Footer />
    </div>
  );
}

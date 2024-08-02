import Header from "./components/Header";

import Image from "next/image";
import Link from "next/link";
import downArrow from "../../public/images/down.png";
import logoAward from "../../public/images/logo_award.png";
import ic_kakao from "../../public/images/ic_kakao.png";
import ic_insta from "../../public/images/ic_insta.png";
import ic_plus_b from "../../public/images/ic_plus_b.png";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      <Footer />
    </div>
  );
}

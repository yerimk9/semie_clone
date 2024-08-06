import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import il_smile2 from "@/../public/images/il_samie_2.png";
import il_write from "@/../public/images/ic_write.png";

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
                <button type="button">요리해요</button>
              </li>
              <li>
                <button type="button">고민있어요</button>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default page;

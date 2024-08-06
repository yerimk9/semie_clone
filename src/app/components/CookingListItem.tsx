import Image from "next/image";
import Link from "next/link";
import React from "react";

function CookingListItem() {
  return (
    <>
      <Link href={"/"}>
        <div className="img">
          <Image
            src={
              "https://semie.cooking/image/board/cooking/bz/he/lthwjojo/145137870rprm.jpg"
            }
            alt=""
            width={2268}
            height={3080}
          />
        </div>
        <div className="info">
          <span className="name">코알라</span>
          <span className="date">2024.08.06 20:06</span>
        </div>
        <div className="text">
          <h4>두반장 마파두부~</h4>
        </div>
      </Link>
      <Link href={"/"} className="scrap">
        스크랩
      </Link>
    </>
  );
}

export default CookingListItem;

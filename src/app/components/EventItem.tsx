import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EventItemProps } from "../types";

function EventItem({ imgUrl, status }: EventItemProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "진행중":
        return "green";
      case "종료":
        return "gray";
      case "당첨자 발표":
        return "orange";
      default:
        return "";
    }
  };

  return (
    <Link href={"/"}>
      <div className="img">
        <Image src={imgUrl} alt="" width={476} height={268} />
      </div>
      <p className="tit">새미와 함께 요리해!</p>
      <p className="date">
        <span className={getStatusClass(status)}>{status}</span>
        2024.07.10 ~ 2024.08.11
      </p>
    </Link>
  );
}

export default EventItem;

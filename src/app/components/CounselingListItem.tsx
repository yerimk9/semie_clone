import Image from "next/image";
import Link from "next/link";
import React from "react";

function CounselingListItem() {
  let imgUrl =
    "https://semie.cooking/image/board/worry/au/ug/ayoftiqr/144759975zsma.jpg";
  return (
    <>
      <Link href={"/"}>
        {imgUrl && (
          <div className="img">
            <Image
              src={imgUrl}
              alt="Counseling Image"
              width={3024}
              height={4032}
            />
          </div>
        )}

        <div className="info">
          <span className="name">천블리네</span>
          <span className="date">2024.08.04 13:24</span>
        </div>
        <div className="text">
          <h4>초간단 파이수프 궁금해됴</h4>
          <p>
            아이들이 너무 좋아해서 뷔페 갈때마다 먹던 파이스프 레시피가 있길래
            한번 만들어보려고 하니 계란물을 바르게 되어있네요 큰아이가
            계란알레르기가 있어 계란을 못먹는데 대체할수있는 요리법이 있을까요?
          </p>
        </div>
        <ol className="hashWrap"></ol>
        <div className="foot">
          <div className="cmtNum">7</div>
          <Link href={"/"} className="scrap">
            스크랩
          </Link>
        </div>
      </Link>
    </>
  );
}

export default CounselingListItem;

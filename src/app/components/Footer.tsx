import Image from "next/image";
import Link from "next/link";
import React from "react";
import downArrow from "../../../public/images/down.png";
import logoAward from "../../../public/images/logo_award.png";
import ic_insta from "../../../public/images/ic_insta.png";
import ic_kakao from "../../../public/images/ic_kakao.png";
import ic_plus_b from "../../../public/images/ic_plus_b.png";

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="ft_left">
          <ul className="ft_link">
            <li>
              <Link href={"/"}>이용약관</Link>
            </li>
            <li>
              <Link href={"/"}>개인정보처리방침</Link>
            </li>
            <li>
              <Link href={"/"}>이용 가이드</Link>
            </li>
            <li>
              <Link href={"/"}>ABOUT US</Link>
            </li>
          </ul>
          <ul className="ft_info">
            <li>샘표식품(주)</li>
            <li>
              사업자 정보
              <Image src={downArrow} alt="downArrow" width={20} height={20} />
            </li>
          </ul>
          <div className="ft_info_drop">
            대표이사: 박진선
            <br />
            사업자 번호: 446-87-00473
            <br />
            주소 : 서울특별시 중구 충무로2 (우편번호 : 04557)
          </div>
          <p>Copyright &copy; 샘표식품, All Rights Reserved.</p>
        </div>
        <div className="ft_right">
          <ul className="ft_sns">
            <li className="logo_award">
              <Image src={logoAward} alt="logoAward" width={90} height={35} />
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/semie_kitchen/"}
                target="_blank"
              >
                <Image src={ic_insta} alt="ic_insta" width={23} height={23} />
              </Link>
            </li>
            <li>
              <Link href={"https://pf.kakao.com/_Hxoxkxab"} target="_blank">
                <Image src={ic_kakao} alt="ic_kakao" width={23} height={23} />
              </Link>
            </li>
            <li className="sitemap">
              <button type="button">
                관련사이트
                <Image src={ic_plus_b} alt="ic_plus_b" width={16} height={16} />
              </button>
              <div className="siteList">
                <ul>
                  <li>
                    <Link
                      href={"http://www.tasiakitchen.co.kr/"}
                      target="_blank"
                    >
                      샘표 기업
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"http://www.semie-kitchen.com/"}
                      target="_blank"
                    >
                      새미네부엌 플랫폼
                    </Link>
                  </li>
                  <li>
                    <Link href={"http://www.fontanastyle.com/"} target="_blank">
                      티·아시아
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.semie-kitchen.com/default/"}
                      target="_blank"
                    >
                      새미네부엌
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.fontanastyle.com/main.do"}
                      target="_blank"
                    >
                      폰타나
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://sempio.recruiter.co.kr/appsite/company/index"
                      }
                      target="_blank"
                    >
                      샘표 채용
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://member.sempio.com/login"}
                      target="_blank"
                    >
                      샘표 통합회원 웹사이트
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <button className="ft_top" type="button">
            맨 위로
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
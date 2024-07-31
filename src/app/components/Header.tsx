"use client";
import React, { useState } from "react";
import Link from "next/link";
import logoImg from "@/../public/svgs/logo.svg";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header className="header">
        <Link href={"/"} className="logo">
          <Image src={logoImg} alt="logo" width={110} height={85} />
        </Link>

        <nav className="gnb">
          <ul className="depth-1">
            <li>
              <Link href={"/"}>요리초보가이드</Link>
            </li>
            <li>
              <Link href={"/"}>요리연구소</Link>
              <ul className="depth-2">
                <li>
                  <Link href={"/"}>레시피</Link>
                </li>
                <li>
                  <Link href={"/"}>솔루션</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/"}>요리해요</Link>
              <ul className="depth-2">
                <li>
                  <Link href={"/"}>요리해요</Link>
                </li>
                <li>
                  <Link href={"/"}>고민있어요</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/"}>WOW이벤트</Link>
            </li>
          </ul>
        </nav>

        <div className="utWrap">
          <ul className="logWrap">
            <li>
              <Link href={"/"}>로그인</Link>
            </li>
          </ul>
          <div className="searchWrap">
            <input type="text" placeholder="어떤 요리가 궁금하신가요?" />
            <button>검색</button>
          </div>
          <button
            type="button"
            className={`ham ${isMenuOpen && "cross"}`}
            onClick={toggleOpen}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        {/* <div className="scrollindicator" style={{ visibility: "visible" }}>
          <div
            className="scrollprogress"
            style={{ transform: "translate3d(-100%, 0px, 0px)" }}
          ></div>
        </div> */}
      </header>
      <div className={`allMenu_bg ${isMenuOpen && "block"}`}></div>
      <div className={`allMenu ${isMenuOpen && "block"}`}>
        <div className="log loginWrap">
          <Link href={"/"}>로그인을 해주세요</Link>
        </div>
        <nav className="anb">
          <ul className="depth-1">
            <li>
              <Link href={"/"}>요리초보가이드</Link>
            </li>
            <li>
              <Link href={"/"}>요리연구소</Link>
              <ul className="depth-2">
                <li>
                  <Link href={"/"}>레시피</Link>
                </li>
                <li>
                  <Link href={"/"}>솔루션</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/"}>요리해요</Link>
              <ul className="depth-2">
                <li>
                  <Link href={"/"}>요리해요</Link>
                </li>
                <li>
                  <Link href={"/"}>고민있어요</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/"}>WOW이벤트</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

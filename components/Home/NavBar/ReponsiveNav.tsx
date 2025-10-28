"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ReponsiveNav = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenu = () => setShowMenuBar(!showMenuBar);
  const handleOffMenu = () => setShowMenuBar(false);
  return (
    <div className="flex">
      <Nav handleShowMenu={handleShowMenu} showMenuBar={showMenuBar}></Nav>
      {showMenuBar && (
        <MobileNav
          showMenuBar={showMenuBar}
          handleOffMenu={handleOffMenu}
        ></MobileNav>
      )}
    </div>
  );
};

export default ReponsiveNav;

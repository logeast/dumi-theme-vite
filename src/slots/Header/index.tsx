import { ReactComponent as IconClose } from "@ant-design/icons-svg/inline-svg/outlined/close.svg";
import { ReactComponent as IconMenu } from "@ant-design/icons-svg/inline-svg/outlined/menu.svg";
import { useSidebarData, useSiteData } from "dumi";
// import { useRouteMeta } from "dumi";
import React, { FC, useState } from "react";
import ColorSwitch from "../ColorSwitch";
import LangSwitch from "../LangSwitch";
import Logo from "../Logo";
import Navbar from "../Navbar";
import RtlSwitch from "../RtlSwitch";
import SearchBar from "../SearchBar";
import "./index.less";

const Header: FC = () => {
  // const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const sidebar = useSidebarData();
  const { themeConfig } = useSiteData();

  return (
    <div
      className={`dumi-vite-header ${
        sidebar ? "dumi-vite-header-has-sidebar" : ""
      }`}
      // data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      {sidebar ? <div className="dumi-vite-header-has-sidebar-bg"></div> : null}
      <div className="dumi-vite-header-content">
        <section className="dumi-vite-header-left">
          <Logo />
        </section>
        <section className="dumi-vite-header-right">
          <SearchBar />
          <div className="dumi-vite-header-right-aside">
            <Navbar />
            <LangSwitch />
            <RtlSwitch />
            {themeConfig.prefersColor.switch && <ColorSwitch />}
          </div>
        </section>
        <button
          type="button"
          className="dumi-vite-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;

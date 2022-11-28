import { ReactComponent as IconClose } from "@ant-design/icons-svg/inline-svg/outlined/close.svg";
import { ReactComponent as IconMenu } from "@ant-design/icons-svg/inline-svg/outlined/menu.svg";
// import { useRouteMeta } from "dumi";
import React, { useState, type FC } from "react";
import LangSwitch from "../../slots/LangSwitch";
import Logo from "../../slots/Logo";
import Navbar from "../../slots/Navbar";
import RtlSwitch from "../../slots/RtlSwitch";
import SearchBar from "../../slots/SearchBar";
import "./index.less";

const Header: FC = ({ hasSidebar = false }: { hasSidebar?: boolean }) => {
  // const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`dumi-vite-header ${
        hasSidebar ? "dumi-vite-header-has-sidebar" : ""
      }`}
      // data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      {hasSidebar ? (
        <div className="dumi-vite-header-has-sidebar-bg"></div>
      ) : null}
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

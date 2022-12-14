import { ReactComponent as IconSidebar } from "@ant-design/icons-svg/inline-svg/outlined/align-left.svg";
import { Helmet, useIntl, useOutlet, useRouteMeta, useSidebarData } from "dumi";
import React, { useState, type FC } from "react";
import Content from "../../slots/Content";
import Features from "../../slots/Features";
import Footer from "../../slots/Footer";
import Header from "../../slots/Header";
import Hero from "../../slots/Hero";
import Sidebar from "../../slots/Sidebar";
import Toc from "../../slots/Toc";
import "./index.less";

const DocLayout: FC = () => {
  const intl = useIntl();
  const outlet = useOutlet();
  const sidebar = useSidebarData();
  const [showSidebar, setShowSidebar] = useState(false);
  const { frontmatter: fm } = useRouteMeta();

  return (
    <div
      className="dumi-vite-doc-layout"
      data-mobile-sidebar-active={showSidebar || undefined}
      onClick={() => setShowSidebar(false)}
    >
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, "")} />
        {fm.title && <title>{fm.title}</title>}
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && (
          <meta property="og:description" content={fm.description} />
        )}
        {fm.keywords && (
          <meta name="keywords" content={fm.keywords.join(",")} />
        )}
        {fm.keywords && (
          <meta property="og:keywords" content={fm.keywords.join(",")} />
        )}
      </Helmet>
      <Header />
      <Hero />
      <Features />
      {sidebar && (
        <div className="dumi-vite-doc-layout-mobile-bar">
          <button
            type="button"
            className="dumi-vite-sidebar-btn"
            onClick={(ev) => {
              ev.stopPropagation();
              setShowSidebar((v) => !v);
            }}
          >
            <IconSidebar />
            {intl.formatMessage({ id: "layout.sidebar.btn" })}
          </button>
        </div>
      )}
      {sidebar && (
        <aside className="dumi-vite-doc-layout-aside">
          <Sidebar />
        </aside>
      )}
      <main className="dumi-vite-doc-layout-main">
        <Content>{outlet}</Content>
        <div className="dumi-vite-doc-layout-main-aside">
          {fm.toc === "content" && (
            <div className="dumi-vite-doc-layout-toc-wrapper">
              <div className="dumi-vite-doc-layout-toc-title">On this page</div>
              <Toc />
            </div>
          )}
        </div>
      </main>
      {!sidebar && <Footer />}
    </div>
  );
};

export default DocLayout;

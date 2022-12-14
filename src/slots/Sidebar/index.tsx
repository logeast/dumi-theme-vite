import { NavLink, useLocation, useRouteMeta, useSidebarData } from "dumi";
import React, { type FC } from "react";
import Toc from "../../slots/Toc";
import "./index.less";

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <nav className="dumi-vite-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-vite-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link}>
              <NavLink to={child.link} title={child.title} end>
                {child.title}
              </NavLink>
              {child.link === pathname && meta.frontmatter.toc === "menu" && (
                <Toc />
              )}
            </dd>
          ))}
        </dl>
      ))}
    </nav>
  );
};

export default Sidebar;

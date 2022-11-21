import { useSiteData } from "dumi";
import React, { type FC } from "react";
import "./index.less";

const Footer: FC = () => {
  const { themeConfig } = useSiteData();

  if (!themeConfig.footer) return null;

  return (
    <div
      className="dumi-vite-footer"
      dangerouslySetInnerHTML={{ __html: themeConfig.footer }}
    />
  );
};

export default Footer;

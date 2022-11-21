import { Link, useLocale, useSiteData } from "dumi";
import React, { type FC } from "react";
import "./index.less";
import DefaultLogo from "./logo.png";

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  return (
    <Link className="dumi-vite-logo" to={"base" in locale ? locale.base : "/"}>
      <img src={themeConfig.logo || DefaultLogo} alt={themeConfig.name} />
      {themeConfig.name}
    </Link>
  );
};

export default Logo;

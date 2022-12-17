import { Link, useLocale, useSiteData } from "dumi";
import React, { type FC } from "react";
import DefaultLogo from "../DefaultLogo";
import "./index.less";

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  return (
    <Link className="dumi-vite-logo" to={"base" in locale ? locale.base : "/"}>
      {themeConfig.logo ? (
        <img src={themeConfig.logo} alt={themeConfig.name} />
      ) : (
        <DefaultLogo />
      )}
      {themeConfig.name}
    </Link>
  );
};

export default Logo;

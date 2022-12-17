import { Link, useLocale, useSiteData } from "dumi";
import React, { type FC } from "react";
import { LOGO_64_BASE64 } from "../DefaultLogo";
import "./index.less";

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  return (
    <Link className="dumi-vite-logo" to={"base" in locale ? locale.base : "/"}>
      <img src={themeConfig.logo || LOGO_64_BASE64} alt={themeConfig.name} />
      {themeConfig.name}
    </Link>
  );
};

export default Logo;

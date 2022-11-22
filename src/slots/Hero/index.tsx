import { Link, useRouteMeta } from "dumi";
import React, { type FC } from "react";
import HeroTitle from "../../slots/HeroTitle";
import "./index.less";

const Hero: FC = () => {
  const { frontmatter } = useRouteMeta();

  if (!("hero" in frontmatter)) return null;

  return (
    <div className="dumi-vite-hero">
      <div className="dumi-vite-hero-main">
        {frontmatter.hero!.title && (
          <HeroTitle>{frontmatter.hero!.title}</HeroTitle>
        )}
        {/* You can use any html element in description props */}
        {frontmatter.hero!.description && (
          <div
            dangerouslySetInnerHTML={{ __html: frontmatter.hero!.description }}
          />
        )}
        {frontmatter.hero!.text && (
          <p className="dumi-vite-hero-text">{frontmatter.hero!.text}</p>
        )}
        {frontmatter.hero!.tagline && (
          <p className="dumi-vite-hero-tagline">{frontmatter.hero!.tagline}</p>
        )}
        {Boolean(frontmatter.hero!.actions?.length) && (
          <div className="dumi-vite-hero-actions">
            {frontmatter.hero!.actions!.map(({ text, link }) =>
              /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? (
                <a href={link} target="_blank" rel="noreferrer" key={text}>
                  {text}
                </a>
              ) : (
                <Link key={text} to={link}>
                  {text}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
      <div className="dumi-vite-hero-image"></div>
    </div>
  );
};

export default Hero;

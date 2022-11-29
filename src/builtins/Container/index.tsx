import React, { type FC, type ReactNode } from "react";
import "./index.less";

const Container: FC<{ type: string; title?: string; children: ReactNode }> = (
  props,
) => {
  return (
    <div className="dumi-vite-container markdown" data-type={props.type}>
      <h4>{props.title || props.type.toUpperCase()}</h4>
      <section>{props.children}</section>
    </div>
  );
};

export default Container;

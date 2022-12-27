import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

import "prismjs/themes/prism-coy.css";
import React, { useRef, useState, type FC } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.less";

/**
 * define DSL which can be highlighted as similar language
 */
const SIMILAR_DSL: Record<string, Language> = {
  acss: "css",
  axml: "markup",
};

const SourceCode: FC<{ children: string; lang: Language }> = ({
  children,
  lang,
}) => {
  const timer = useRef<number>();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="dumi-vite-source-code">
      <CopyToClipboard
        text={children}
        onCopy={() => {
          setIsCopied(true);
          clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setIsCopied(false), 2000);
        }}
      >
        <button
          type="button"
          className="dumi-vite-source-code-copy"
          data-copied={isCopied || undefined}
        >
          {isCopied ? <CheckOutlined /> : <CopyOutlined />}
        </button>
      </CopyToClipboard>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={SIMILAR_DSL[lang] || lang}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={String(i)} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={String(i)} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default SourceCode;

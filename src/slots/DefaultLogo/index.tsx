import * as React from "react";

function DefaultLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_742_3492)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.238 7.254c-1.685.779-1.688 2.04 0 2.821l9.654 4.462c.841.39 2.21.387 3.046 0l9.654-4.463c1.686-.78 1.688-2.042 0-2.822L17.938 2.79c-.841-.388-2.209-.386-3.046 0L5.238 7.254z"
          fill="url(#prefix__paint0_linear_742_3492)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.886 14.813a1.673 1.673 0 012.226-.825l9.146 4.247a2.504 2.504 0 002.108 0l9.146-4.246a1.673 1.673 0 012.226.824 1.692 1.692 0 01-.82 2.24l-9.146 4.246a5.842 5.842 0 01-4.92 0l-9.146-4.246a1.692 1.692 0 01-.82-2.24z"
          fill="url(#prefix__paint1_linear_742_3492)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.886 22.043a1.673 1.673 0 012.226-.825l9.146 4.246a2.502 2.502 0 002.108 0l9.146-4.246a1.673 1.673 0 012.226.825 1.692 1.692 0 01-.82 2.24l-9.146 4.246a5.84 5.84 0 01-4.92 0l-9.146-4.247a1.692 1.692 0 01-.82-2.24z"
          fill="url(#prefix__paint2_linear_742_3492)"
        />
        <g filter="url(#prefix__filter0_d_742_3492)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.358 5.151a.4.4 0 01.335 0l7.412 3.398a.135.135 0 010 .246l-1.012.47-7.875-3.586 1.14-.528zm-2.107.977L9.495 7.869a.135.135 0 000 .245l7.386 3.412a.4.4 0 00.336 0l3.908-1.813-7.874-3.585zm2.776-1.715a1.201 1.201 0 00-1.006.003L9.158 7.133c-.728.338-.728 1.38.002 1.717l7.385 3.412c.32.148.69.148 1.01 0l5.887-2.732c.73-.338.728-1.382-.003-1.718l-7.412-3.399z"
            fill="#C7D2FE"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_742_3492"
          x1={16.415}
          y1={2.5}
          x2={16.415}
          y2={14.828}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366F1" />
          <stop offset={1} stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_742_3492"
          x1={16.312}
          y1={15.521}
          x2={16.312}
          y2={20.155}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366F1" />
          <stop offset={1} stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear_742_3492"
          x1={16.312}
          y1={22.75}
          x2={16.312}
          y2={27.385}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5B4FC" />
          <stop offset={1} stopColor="#818CF8" />
        </linearGradient>
        <clipPath id="prefix__clip0_742_3492">
          <path fill="#fff" transform="translate(3 2.5)" d="M0 0h26v27H0z" />
        </clipPath>
        <filter
          id="prefix__filter0_d_742_3492"
          x={-18.388}
          y={2.304}
          width={69.376}
          height={62.069}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={25} />
          <feGaussianBlur stdDeviation={13.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0842535 0 0 0 0 0.21144 0 0 0 0 0.879167 0 0 0 0.2 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_742_3492"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_742_3492"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default DefaultLogo;

export * from "./logo-base64";

import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 12.5A2.5 2.5 0 1 1 7 7.5 2.5 2.5 0 0 1 7 12.5z" fill="#0ACF83"/>
    <path d="M12.5 7A2.5 2.5 0 1 1 7.5 7 2.5 2.5 0 0 1 12.5 7z" fill="#A259FF"/>
    <path d="M12.5 12.5A2.5 2.5 0 1 1 7.5 12.5 2.5 2.5 0 0 1 12.5 12.5z" fill="#F24E1E"/>
    <path d="M12.5 17A2.5 2.5 0 1 1 12.5 12.5 2.5 2.5 0 0 1 12.5 17z" fill="#FF7262"/>
    <path d="M17 12.5A2.5 2.5 0 1 1 17 7.5 2.5 2.5 0 0 1 17 12.5z" fill="#1ABCFE"/>
  </svg>
);

export { Figma };

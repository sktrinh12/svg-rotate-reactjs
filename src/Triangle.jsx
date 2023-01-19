import * as React from "react";

const Triangle = ({ svgRef, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="m13.789 1.578 9.764 19.528A2 2 0 0 1 21.763 24H2.237a2 2 0 0 1-1.789-2.894l9.764-19.528a2 2 0 0 1 3.578 0Z"
      fill="#758CA3"
      ref={svgRef}
    />

    <circle cx="12" cy="15" r="1" fill="red" />
  </svg>
);
export default Triangle;

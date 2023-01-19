import React, { useState, useRef } from "react";
import Triangle from "./Triangle";
import "./App.css";

// import SVGStyles from "./SVGStyles";

function SVGComponent() {
  const svgRef = useRef(null);
  const [rotate, setRotate] = useState(45);
  // const [viewBox, setviewBox] = useState("0 0 24 24");

  // function handleChange(event) {
  //   setRotate(event.target.value);
  // }

  function rotateSvg(event) {
    setRotate(event.target.value);
    const offsetX = 0;
    const offsetY = 3;
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();
      const cx = bbox.x + bbox.width / 2 + offsetX;
      const cy = bbox.y + bbox.height / 2 + offsetY;
      // console.log(`x:${cx} y:${cy}`);
      // setviewBox([bbox.x, bbox.y, bbox.width, bbox.height].join(" "));

      // svgRef.current.style.setProperty("--r", `${rotate}deg`);
      svgRef.current.setAttribute("transform", `rotate(${rotate} ${cx} ${cy})`);
    }
  }

  return (
    <>
      <Triangle
        svgRef={svgRef}
        style={{
          width: "15em",
          overflow: "visible",
          border: "1px solid #ccc",
        }}
      />{" "}
      {/*<Triangle viewBox={viewBox} style={{ border: "1px solid red" }} />*/}
      <br />
      <p>
        <label>
          Angle:
          <input
            type="range"
            min="0"
            max="360"
            value={rotate}
            onChange={rotateSvg}
            style={{ marginTop: "3em" }}
          />
          {rotate}°
        </label>
      </p>
      {/*<button onClick={rotateSvg}>Rotate</button>*/}
    </>
  );
}

export default SVGComponent;

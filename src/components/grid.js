import "../App.css";
import React, { useRef, useEffect } from "react";
import { computeIntersectionsCoordinates } from "../helpers/compute-intersection-coordinates";
import { drawContent } from "../helpers/draw-content";
import { initCanvas } from "../helpers/init-canvas";
import { buildGrid } from "../helpers/build-grid";

const Grid = ({ data, theme, isOpen, className }) => {
  const canvasRef = useRef(null);

  const options = {
    cols: data?.columns?.length - 1,
    rows: data?.rows?.length,
    width: (data?.columns?.length - 1) * 230,
    height: data?.rows?.length * 50,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    options.offsetX = Math.ceil(options.width / options.cols);
    options.offsetY = Math.ceil(options.height / options.rows);
    options.canvas = canvas;
    options.ctx = ctx;

    const render = () => {
      initCanvas(options, theme);
      buildGrid(options, theme);
      const coordinates = computeIntersectionsCoordinates(options);
      drawContent(coordinates, ctx, data?.directions);
    };
    render();
  }, []);

  const siderItems = data.rows.map((r) => (
    <div className="sider-item" key={r}>
      {r}
    </div>
  ));

  return (
    <div className={className} style={{ marginRight: isOpen ? "25em" : 0 }}>
      <div className="sider">{siderItems}</div>
      <canvas ref={canvasRef} className="canvas" />
      <div className="sider-right">{siderItems}</div>
    </div>
  );
};

export default Grid;

import "../App.css";
import generateTooltips from "../helpers/generate-tooltips";
import { useRef, useEffect, useState } from "react";
import { computeIntersectionsCoordinates } from "../helpers/compute-intersection-coordinates";
import { GridOptions, GridProps } from "../types";
import { drawContent } from "../helpers/draw-content";
import { initCanvas } from "../helpers/init-canvas";
import { buildGrid } from "../helpers/build-grid";

const Grid = ({ data, theme, isOpen, className }: GridProps): JSX.Element => {
  const [tooltipCoordinates, setTooltipCoordinates] = useState<any>({});
  const canvasRef = useRef(null);

  useEffect(() => {
    const options: GridOptions = {
      canvas: canvasRef.current as unknown as HTMLCanvasElement,
      width: (data?.columns?.length - 1) * 230,
      height: data?.rows?.length * 50,
      cols: data?.columns?.length - 1,
      rows: data?.rows?.length,
      offsetX: 0,
      offsetY: 0,
      ctx: 0,
    };

    options.ctx = options.canvas.getContext("2d");
    options.offsetX = Math.ceil(options.width / options.cols);
    options.offsetY = Math.ceil(options.height / options.rows);

    const render = () => {
      initCanvas(options);
      buildGrid(options, theme);

      const coordinates = computeIntersectionsCoordinates(options);
      const tooltipC = drawContent({
        coordinates,
        ctx: options?.ctx,
        directions: data?.directions,
      });

      setTooltipCoordinates(tooltipC);
    };
    render();
  }, []);

  const siderItems = data.rows.map((r: string) => (
    <div className="sider-item" key={r}>
      {r}
    </div>
  ));

  return (
    <div className={className} style={{ marginRight: isOpen ? "25em" : 0 }}>
      <div className="sider">{siderItems}</div>
      <canvas ref={canvasRef} className="canvas" />
      <div
        className="dom-overlay"
        style={{
          width: (data?.columns?.length - 1) * 230,
          height: data?.rows?.length * 50,
        }}
      >
        {generateTooltips(tooltipCoordinates)}
      </div>
      <div className="sider-right">{siderItems}</div>
    </div>
  );
};

export default Grid;

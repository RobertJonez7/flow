import "../App.css";
import generateTooltips from "../helpers/generate-tooltips";
import { useRef, useEffect, useState } from "react";
import { computeIntersectionsCoordinates } from "../helpers/compute-intersection-coordinates";
import { GridOptions, GridProps } from "../types";
import { drawContent } from "../helpers/draw-content";
import { initCanvas } from "../helpers/init-canvas";
import { buildGrid } from "../helpers/build-grid";

const Grid = ({
  data,
  theme,
  isOpen,
  className,
  colorPallete,
}: GridProps): JSX.Element => {
  const [tooltipCoordinates, setTooltipCoordinates] = useState<any>({});
  const canvasRef = useRef(null);

  const numOfRows = Object.values(data).reduce((num: number, val: any) => {
    if (val?.rcvd_time > num) num = val?.rcvd_time;
    return num;
  }, 0);

  useEffect(() => {
    const options: GridOptions = {
      canvas: canvasRef.current as unknown as HTMLCanvasElement,
      width: 3 * 230, //(data?.columns?.length - 1) * 230,
      height: 22 * 50, //data?.rows?.length * 50,
      rows: numOfRows,
      cols: 3,
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
        colorPallete,
        ctx: options?.ctx,
        directions: data,
      });

      setTooltipCoordinates(tooltipC);
    };
    render();
  }, []);

  const rowHeaders = Array(numOfRows + 1)
    .fill(0)
    .map((n, i) => n + i)
    .map((r: number) => <div key={r}>{r}</div>);

  const columnHeaders = [
    "TEST: 0x0",
    "TEST: 0x3",
    "TEST: 0x4",
    "TEST: 0x40",
  ].map((c: string) => <div>{c}</div>);

  return (
    <div className={className} style={{ marginRight: isOpen ? "25em" : 0 }}>
      <div className="column-headers" style={{ width: 3 * 230 + 60 }}>
        {columnHeaders}
      </div>
      <div className="grid">
        <div className="row-headers">{rowHeaders}</div>
        <div>
          <canvas ref={canvasRef} className="canvas" />
        </div>
        <div
          className="dom-overlay"
          style={{
            width: 3 * 230,
            height: numOfRows * 50,
          }}
        >
          {generateTooltips(tooltipCoordinates)}
        </div>
        <div className="row-headers-right">{rowHeaders}</div>
      </div>
    </div>
  );
};

export default Grid;

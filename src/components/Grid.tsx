import "../App.css";
import generateTooltips from "../helpers/generate-tooltips";
import { useRef, useEffect, useState } from "react";
import { computeIntersectionsCoordinates } from "../helpers/compute-intersection-coordinates";
import { GridOptions, GridProps } from "../types";
import { drawContent } from "../helpers/draw-content";
import { initCanvas } from "../helpers/init-canvas";
import { buildGrid } from "../helpers/build-grid";

const Grid = ({
  colorPallete,
  descriptions,
  className,
  response,
  isOpen,
  theme,
}: GridProps): JSX.Element => {
  const [tooltipCoordinates, setTooltipCoordinates] = useState<any>({});
  const canvasRef = useRef(null);

  const headers = response?.columns.reduce(
    (obj: Record<string, number>, val: string, i: number) => {
      obj[val] = i;
      return obj;
    },
    {}
  );

  const width = (response?.columns?.length - 1) * 230;
  const height = response?.rows?.length * 50;

  const generatecolumnHeaders = () => {
    let i = 0;
    return response?.columns?.reduce((arr, val) => {
      const offset = (val.length * 16) / 4;
      const elem = (
        <div style={{ position: "absolute", left: i - offset }}>{val}</div>
      );

      arr.push(elem);
      i += 230;

      return arr;
    }, [] as any);
  };

  useEffect(() => {
    const options: GridOptions = {
      canvas: canvasRef.current as unknown as HTMLCanvasElement, // @ts-ignore
      ctx: canvasRef.current.getContext("2d"),
      cols: response?.columns?.length - 1,
      rows: response?.rows.length,
      offsetX: 0,
      offsetY: 0,
      height,
      width,
    };

    options.offsetX = Math.ceil(options.width / options.cols);
    options.offsetY = Math.ceil(options.height / options.rows);

    const render = () => {
      initCanvas(options, theme);
      buildGrid(options, theme, response?.rows);
      const coordinates = computeIntersectionsCoordinates(options);
      const tooltipCoordinates = drawContent(descriptions, {
        data: response?.data,
        ctx: options?.ctx,
        colorPallete,
        coordinates,
        headers,
      });
      setTooltipCoordinates(tooltipCoordinates);
    };
    render();
  }, [descriptions, response]);

  return (
    <div className={className} style={{ marginRight: isOpen ? "25em" : 0 }}>
      <div className="column-headers" style={{ width }}>
        <div
          className="column-container"
          style={{ width: width + 10, height: 20 }}
        >
          {generatecolumnHeaders()}
        </div>
      </div>
      <div className="grid">
        <canvas ref={canvasRef} className="canvas" />
        <div
          className="dom-overlay"
          style={{
            width,
            height,
          }}
        >
          {generateTooltips(tooltipCoordinates)}
        </div>
      </div>
    </div>
  );
};

export default Grid;

import "../App.css";
import generateTooltips from "../helpers/generate-tooltips";
import { computeIntersectionsCoordinates } from "../helpers/compute-intersection-coordinates";
import { useRef, useEffect, useState } from "react";
import { GridOptions, GridProps } from "../types";
import { drawContent } from "../helpers/draw-content";
import { initCanvas } from "../helpers/init-canvas";
import { buildGrid } from "../helpers/build-grid";
import {
  COVER_WIDTH,
  HEADER_OFFSET,
  ROW_HEIGHT,
  ROW_WIDTH,
} from "../helpers/constants";

const Grid = ({
  colorPallete,
  descriptions,
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

  const width = (response?.columns?.length - 1) * ROW_WIDTH;
  const height = response?.rows?.length * ROW_HEIGHT;

  const generatecolumnHeaders = () => {
    let i = 0;
    return response?.columns?.reduce((arr, val) => {
      const offset = (val.length * HEADER_OFFSET) / 4;
      const elem = (
        <div className="header-elem" style={{ left: i - offset }}>
          {val}
        </div>
      );

      arr.push(elem);
      i += ROW_WIDTH;

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
      const coordinates = computeIntersectionsCoordinates(
        options,
        response?.rows
      );
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
    <>
      <div className="cover" style={{ width: width + COVER_WIDTH }} />
      <div
        className="grid-container"
        style={{
          marginRight: isOpen ? "25em" : 0,
          maxWidth: isOpen ? "60vw" : "75vw",
        }}
      >
        <div className="grid">
          <div className="column-container" style={{ width }}>
            {generatecolumnHeaders()}
          </div>
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
    </>
  );
};

export default Grid;

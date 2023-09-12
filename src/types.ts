export type ButtonProps = {
  title: string;
  className?: string;
  fn: any;
  disabled: boolean;
};

export type SwitchProps = {
  checked: boolean;
  disabled: boolean;
  fn: any;
};

export type ColorPallete = {
  [n: string]: string;
};

export type GridProps = {
  response: ResponseData;
  theme: string;
  isOpen: boolean;
  colorPallete: ColorPallete;
  descriptions: boolean;
};

export type HeaderProps = {
  title: string;
  isOpen: boolean;
};

export type LegendValueProps = {
  title: string;
  color: string;
};

export type SidebarProps = {
  colorPallete: ColorPallete;
  toggleOpen: any;
  isOpen: boolean;
  toggleTheme: any;
  theme: string;
  toggleDescriptions: any;
  descriptions: boolean;
  loading: boolean;
};

export type GridOptions = {
  cols: number;
  rows: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  offsetX: number;
  offsetY: number;
};

export type BuildGridArgs = {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  offsetX: number;
  offsetY: number;
};

export type CoordinateArgs = {
  offsetX: number;
  offsetY: number;
  rows: number;
  cols: number;
};

export type Intersections = {
  [n: string]: {
    [n: string]: number;
  };
};

export type DrawArrowArgs = {
  ctx: CanvasRenderingContext2D;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  radius: number;
  color: string;
};

export type DrawContentArgs = {
  coordinates: Intersections;
  data: GridData;
  ctx: CanvasRenderingContext2D;
  colorPallete: ColorPallete;
  headers: any;
};

export type InitCanvasArgs = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
};

export type GenerateToolTipArgs = {
  coordinates: Intersections;
  directions: any;
};

export type ResponseData = {
  columns: string[];
  rows: number[];
  data: GridData;
};

export type GridData = {
  [n: string]: GridElement;
};

export type GridElement = {
  elder_id: string;
  self_id: string;
  sent_time: number;
  rcvd_time: number;
  src_node: string;
  tgt_node: string;
  channel: string;
  description: string;
  address: string;
};

export type TooltipCoordinates = {
  x: number;
  y: number;
  description: string;
  increment: boolean;
};

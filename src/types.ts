export type ButtonProps = {
  title: string;
  className?: string;
  fn: any;
};

export type SwitchProps = {
  checked: boolean;
  fn: any;
};

export type ColorPallete = {
  [n: string]: string;
};

export type GridProps = {
  data: any;
  theme: string;
  isOpen: boolean;
  className: string;
  colorPallete: ColorPallete;
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
};

export type GridOptions = {
  cols: number;
  rows: number;
  width: number;
  height: number;
  canvas: any;
  ctx: any;
  offsetX: number;
  offsetY: number;
};

export type BuildGridArgs = {
  width: number;
  height: number;
  ctx: any;
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
  ctx: any;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  radius: number;
  color: string;
};

export type DrawContentArgs = {
  coordinates: Intersections;
  directions: any;
  ctx: any;
  colorPallete: ColorPallete;
};

export type InitCanvasArgs = {
  canvas: any;
  ctx: any;
  width: number;
  height: number;
};

export type GenerateToolTipArgs = {
  coordinates: Intersections;
  directions: any;
};

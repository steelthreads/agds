export interface ThemeType {
  family: string;
  fontGrid: FontGrid;
}
export interface FontGrid {
  sm: FontParams;
  lg: FontParams;
}
export interface FontParams {
  fontSize: string;
  lineHeight: string;
}

export const theme: ThemeType = {
  family:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontGrid: {
    sm: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    lg: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
};

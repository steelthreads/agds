// allow imports ending with .svg
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// allow imports ending with .jpg
declare module '*.jpg' {
  const content: string;
  export default content;
}

// allow imports ending with .png
declare module '*.png' {
  const content: string;
  export default content;
}

## React Children type reference

```
import React from 'react';

export type ReactText = string | number;

export type ReactChild = React.ReactElement | ReactText;

export interface ReactNodeArray extends Array<React.ReactNode> {}

export type ReactFragment = {} | ReactNodeArray;

export type ReactNode = ReactChild | ReactFragment | React.ReactPortal | boolean | null | undefined;

```

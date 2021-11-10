// @ts-nocheck
// eslint-disbale

import React from 'react';
import {
  AUtableHead,
  AUtableRow,
  AUtableCell,
  AUtableResponsiveWrapper,
  AUtableCaption,
  AUtableBody,
} from '@gold.au/table';

export { AUtableHead, AUtableRow, AUtableCell, AUtableResponsiveWrapper, AUtableCaption, AUtableBody };

type AUtableProps = {
  caption?: string;
  headers: Array<{}>;
  data: Array<{}>;
  striped?: boolean;
  className?: string;
  firstCellIsHeader?: boolean;
};

// copy and past from gold-design-system/packages/table/src/js/react.js:24
export const AUtable = ({
  caption,
  headers,
  data,
  striped,
  className,
  firstCellIsHeader,
  ...attributeOptions
}: AUtableProps) => {
  return (
    <table className={`au-table ${striped ? 'au-table--striped ' : ' '} ${className}`} {...attributeOptions}>
      {caption && <AUtableCaption tableCaption={caption} />}
      <AUtableHead>
        <AUtableRow>
          {headers.map((header, index) => (
            <AUtableHead title={header.title} key={index} type={header.type} width={header.width} />
          ))}
        </AUtableRow>
      </AUtableHead>
      <AUtableRow>
        {data.map((row, rowIndex) => (
          <AUtableRow key={rowIndex}>
            {headers.map((header, columnIndex) => {
              // check to render first cell in rows as a header or not
              if (columnIndex === 0 && firstCellIsHeader === true) {
                return <AUtableHead key={columnIndex} scope="row" title={row[header.key] ? row[header.key] : ''} />;
              } else {
                return (
                  <AUtableCell
                    key={columnIndex}
                    data={row[header.key] ? row[header.key] : ''}
                    type={header.type}
                    render={header.render ? header.render(row[header.key], row) : null}
                  />
                );
              }
            })}
          </AUtableRow>
        ))}
      </AUtableRow>
    </table>
  );
};

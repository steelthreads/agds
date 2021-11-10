import React from 'react';
import {
  AUtable,
  AUtableHead,
  AUtableRow,
  AUtableBody,
  AUtableCell,
  AUtableResponsiveWrapper,
  AUtableCaption,
} from '.';

export default {
  title: 'AgDS/Table',
};

export const Basic = () => {
  return <p>Currently exports React components directly from https://gold.designsystemau.org/components/table/</p>;
};

// examples below are from https://gold.designsystemau.org/components/table/
export const VerifyWorks1 = () => {
  const simpleData = [
    { population: '7,670,700', location: 'New South Wales' },
    { location: 'Victoria', population: '5,996,400' },
    { location: 'Tasmania', population: '514,400' },
  ];

  const simpleHeaders = [
    { title: 'Location', key: 'location' },
    { title: 'Population', key: 'population', type: 'numeric' },
  ];
  return (
    <AUtableResponsiveWrapper>
      <AUtable
        caption="Population of Australian states and territories, December 2015"
        headers={simpleHeaders}
        data={simpleData}
      />
    </AUtableResponsiveWrapper>
  );
};

export const VerifyWorks2 = () => (
  <table className="au-table">
    <AUtableHead>
      <AUtableRow>
        <AUtableHead type="text" title="Location" />
        <AUtableHead type="numeric" title="Population" />
        <AUtableHead type="numeric" title="Change over previous year %" />
      </AUtableRow>
    </AUtableHead>
    <AUtableBody>
      <AUtableRow>
        <AUtableCell data="New South Wales" type="text" />
        <AUtableCell data="7,670,700" type="numeric" />
        <AUtableCell data="3.1%" type="numeric" />
      </AUtableRow>
      <AUtableRow>
        <AUtableCell data="Victoria" type="text" />
        <AUtableCell data="5,996,400" type="numeric" className="bold-cell" />
        <AUtableCell data="2.5%" type="numeric" />
      </AUtableRow>
    </AUtableBody>
  </table>
);

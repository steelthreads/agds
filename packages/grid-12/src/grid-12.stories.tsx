import React from 'react';

import { Container, Row, Column } from '.';

export default {
  title: 'AgDS/Grid 12',
};

const Style = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
      <style>
        .grids {
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: rgba(128, 0, 128, .2);
          text-align: center;
          border: 1px solid black;
        }
      </style>
    `,
    }}
  />
);

export const Fixed = () => (
  <>
    <Style />
    <Container>
      <Row>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
        <Column className="grids col-sm-1">1</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-2">2</Column>
        <Column className="grids col-sm-2">2</Column>
        <Column className="grids col-sm-2">2</Column>
        <Column className="grids col-sm-2">2</Column>
        <Column className="grids col-sm-2">2</Column>
        <Column className="grids col-sm-2">2</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-3">3</Column>
        <Column className="grids col-sm-3">3</Column>
        <Column className="grids col-sm-3">3</Column>
        <Column className="grids col-sm-3">3</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-4">4</Column>
        <Column className="grids col-sm-4">4</Column>
        <Column className="grids col-sm-4">4</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-6">6</Column>
        <Column className="grids col-sm-6">6</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-12">12</Column>
      </Row>
      <Row>
        <Column className="grids col-xs-6">6 xs</Column>
        <Column className="grids col-xs-offset-3 col-xs-3">3 xs offset (3)</Column>
      </Row>
      <Row>
        <Column className="grids col-sm-6">6 sm</Column>
      </Row>
      <Row>
        <Column className="grids col-md-6">6 md</Column>
      </Row>
      <Row>
        <Column className="grids col-lg-6">6 lg</Column>
      </Row>
    </Container>
  </>
);

export const Fluid = () => (
  <>
    <Style />
    <Container fluid>
      <Row>
        <Column className="grids col-sm-4">4</Column>
        <Column className="grids col-sm-4">4</Column>
        <Column className="grids col-sm-4">4</Column>
      </Row>
    </Container>
  </>
);

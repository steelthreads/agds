/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx, Global } from '@emotion/react';
import React from 'react';
import { LinkList, LinkListItem } from '.';
import { Container, Row } from '@ag.ds/grid-12';

type TabLinkListProps = {
  children: React.ReactElement<typeof LinkListItem> | React.ReactElement<typeof LinkListItem>[];
};

export const TabLinkList = ({ children }: TabLinkListProps) => (
  <React.Fragment>
    <Global
      styles={css`
        .ag-tab-link-list {
          border-bottom-color: #f5f5f5;
        }
        .ag-tab-link-list li.active a {
          border-bottom-color: #00698f;
        }
      `}
    />
    <nav className={'ag-tab-link-list au-main-nav'}>
      <Container fluid>
        <Row>
          <div className={'col-md-12 clearfix'}>
            <LinkList inline style={{ float: 'left' }}>
              {children}
            </LinkList>
          </div>
        </Row>
      </Container>
    </nav>
  </React.Fragment>
);

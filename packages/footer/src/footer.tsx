import React, { useMemo } from 'react';
import { useLink } from '@ag.ds/core';
import { Global, css } from '@emotion/react';

interface FooterLinkItemProps {
  href: string;
  title: string;
}

export const FooterLink = ({ href, title }: FooterLinkItemProps) => {
  const external = href.startsWith('http');
  if (external) {
    return (
      <li>
        <a href={href} rel={external ? 'external' : undefined}>
          {title}
        </a>
      </li>
    );
  }
  const Link = useLink();
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

interface FooterProps {
  children?: React.ReactElement<typeof FooterLink> | React.ReactElement<typeof FooterLink>[];
}

export const Footer = ({ children }: FooterProps) => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const dark = true;

  return (
    <React.Fragment>
      {dark && (
        <Global
          styles={css`
            .au-footer.au-footer--dark {
              border-color: #f36c52;
              background-color: #162845;
            }
          `}
        />
      )}
      <footer
        className="au-body au-body--dark au-footer au-footer--dark"
        role="contentinfo"
        // css={
        //   dark && {
        //     borderColor: '#f36c52 !important',
        //     backgroundColor: '#162845 !important',
        //   }
        // }
        // style={{ background: 'red' }}
      >
        <div className="container">
          {children ? (
            <nav className="au-footer__navigation row" aria-label="footer">
              <div className="col-sm-12">
                <ul className="au-link-list au-link-list--inline">{children}</ul>
              </div>
            </nav>
          ) : null}
          <div className="row">
            <div className="col-sm-12">
              <div className="au-footer__end">
                <p style={{ marginBottom: '1em' }}>
                  &copy; {year} Department of Agriculture, Water and the Environment
                </p>
                <p>
                  We acknowledge the traditional owners of country throughout Australia and recognise their continuing
                  connection to land, waters and culture. We pay our respects to their Elders past, present and
                  emerging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

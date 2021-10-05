import React from 'react';
import { useLink } from '@ag.ds/core';
import { Global, css } from '@emotion/react';

const YEAR = new Date().getFullYear();

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
  children?: React.ReactElement<typeof FooterLink>[];
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <>
      <Global styles={css`
        .au-footer.au-footer--dark {
          border-color: #F36C52;
          background-color: #162845
        }
      `} />
      <footer className="au-body au-body--dark au-footer au-footer--dark" role="contentinfo">
        <div className="container">
          {children ? (
            <nav className="au-footer__navigation row" aria-label="footer">
              <div className="col-md-3 col-sm-6">
                <ul className="au-link-list">{children}</ul>
              </div>
            </nav>
          ) : null}
          <div className="row">
            <div className="col-sm-12">
              <div className="au-footer__end">
                <p style={{ marginBottom: '1em' }}>&copy; {YEAR} Commonwealth of Australia</p>
                <p>
                  We acknowledge the traditional owners of country throughout Australia and recognise their continuing
                  connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

import React from 'react';
import '@gold.au/link-list/lib/css/styles.css';
import '@gold.au/footer/lib/css/styles.css';
import { useLink } from '@ag.ds/core';

const YEAR = new Date().getFullYear();

interface FooterLinkItemProps {
  href: string;
  title: string;
  external: boolean;
}

export const FooterLink = ({ href, title, external = true }: FooterLinkItemProps) => {
  const Link = external ? 'a' : useLink();
  return (
    <li>
      <Link href={href} rel={external ? 'external' : undefined}>
        {title}
      </Link>
    </li>
  );
};

interface FooterProps {
  children: React.ReactElement<typeof FooterLink>[];
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="au-footer au-footer--dark" role="contentinfo">
      <div className="container">
        {children ? (
          <nav className="au-footer__navigation row" aria-label="footer">
            <div className="col-md-3 col-sm-6">
              <h3 className="au-display-lg">Section</h3>
              <ul className="au-link-list">{children}</ul>
            </div>
          </nav>
        ) : null}
        <div className="row">
          <div className="col-sm-12">
            <div className="au-footer__end">
              <p>&copy; {YEAR} Commonwealth of Australia, </p>
              <p>
                We acknowledge the traditional owners of country throughout Australia and recognise their continuing
                connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

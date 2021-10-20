import React from 'react';
import { Global, css } from '@emotion/react';
import { useLink } from '@ag.ds/core';
import cx from 'classnames';

interface NavLinkProps {
  href: string;
  title: string;
  active?: boolean;
}

export const MainNavLink = ({ href, title, active = false }: NavLinkProps) => {
  const Link = useLink();
  return (
    <li className={cx(active && 'active')}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

interface MainNavProps {
  children: React.ReactElement<typeof MainNavLink>[];
}

export const MainNav = ({ children }: MainNavProps) => {
  const dark = true;
  return (
    <React.Fragment>
      {dark && (
        <Global
          styles={css`
            .au-main-nav.au-main-nav--dark {
              background-color: #0a1931;
              border-color: #f36c52;
            }

            .au-main-nav.au-main-nav--dark .au-main-nav__menu {
              background-color: #0a1931;
            }

            .au-main-nav.au-main-nav--dark a,
            .au-main-nav.au-main-nav--dark .au-main-nav__toggle {
              color: #9ee8ff;
            }

            .au-main-nav.au-main-nav--dark a::-moz-focus-inner,
            .au-main-nav.au-main-nav--dark .au-main-nav__toggle::-moz-focus-inner {
              border: 0;
            }

            .au-main-nav.au-main-nav--dark a:hover,
            .au-main-nav.au-main-nav--dark .au-main-nav__toggle:hover {
              background-color: #0a1931;
            }

            .au-main-nav.au-main-nav--dark .active a {
              border-color: #0a1931;
            }

            .au-main-nav.au-main-nav--dark .active a:hover {
              border-color: #0a1931;
            }

            .au-main-nav.au-main-nav--dark .au-link-list > li {
              border-color: #89afb8;
            }
          `}
        />
      )}
      <nav className={'au-main-nav au-main-nav--dark'} aria-label="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="main-nav-default" className="au-main-nav__content">
                <button
                  aria-controls="main-nav-default"
                  aria-expanded="false"
                  className="au-main-nav__toggle au-main-nav__toggle--open"
                  // onClick="return AU.mainNav.Toggle( this )"
                >
                  Menu
                </button>
                <div className="au-main-nav__menu">
                  <div className="au-main-nav__menu-inner">
                    <div className="au-main-nav__focus-trap-top" />
                    <button
                      aria-controls="main-nav-default"
                      className="au-main-nav__toggle au-main-nav__toggle--close"
                      // onClick="return AU.mainNav.Toggle( this )"
                    >
                      Close
                    </button>
                    <ul className="au-link-list">{children}</ul>
                    <div className="au-main-nav__focus-trap-bottom" />
                  </div>
                </div>
                <div
                  className="au-main-nav__overlay"
                  aria-controls="main-nav-default"
                  // onClick="return AU.mainNav.Toggle( this )"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

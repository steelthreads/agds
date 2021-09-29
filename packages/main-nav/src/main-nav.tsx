import React from 'react';
import '@gold.au/main-nav/lib/css/styles.css';
import { useLink } from '@ag.ds/core';
import cx from 'classnames';

interface NavLinkProps {
  href: string;
  title: string;
  active?: boolean;
}

export const NavLink = ({ href, title, active = false }: NavLinkProps) => {
  const Link = useLink();
  console.log({ href, title, active });
  return (
    <li className={cx(active && 'active')}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

interface MainNavProps {
  dark?: boolean;
  children: React.ReactElement<typeof NavLink>[];
}

export const MainNav = ({ dark = true, children }: MainNavProps) => {
  return (
    <nav className={cx('au-main-nav', dark && 'au-main-nav--dark')} aria-label="main">
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
                  <div className="au-main-nav__focus-trap-top"></div>
                  <button
                    aria-controls="main-nav-default"
                    className="au-main-nav__toggle au-main-nav__toggle--close"
                    // onClick="return AU.mainNav.Toggle( this )"
                  >
                    Close
                  </button>
                  <ul className="au-link-list">{children}</ul>
                  <div className="au-main-nav__focus-trap-bottom"></div>
                </div>
              </div>
              <div
                className="au-main-nav__overlay"
                aria-controls="main-nav-default"
                // onClick="return AU.mainNav.Toggle( this )"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
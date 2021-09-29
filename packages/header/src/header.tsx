import React from 'react';
import '@gold.au/header/lib/css/styles.css';
import './override.css';
import DaweLogo from './dawe-logo-white.png';
import { useLink } from '@ag.ds/core';

interface HeaderProps {
  title?: string;
  subline?: string;
  Logo?: string;
  logoAlt?: string;
  href?: string;
}

export const Header = ({
  title = 'Export Service',
  subline,
  Logo = DaweLogo,
  logoAlt = 'Department of Agriculture, Water and Environment Logo',
  href = '/',
}: HeaderProps) => {
  const Link = useLink();
  return (
    <header className="au-grid au-header au-header--dark" role="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Link className="au-header__brand" href={href}>
              <img className="au-header__brand-image" alt={logoAlt} src={Logo} />
              <div className="au-header__text">
                <h1 className="au-header__heading">{title}</h1>
                {subline && <div className="au-header__subline">{subline}</div>}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import '@gold.au/header/lib/css/styles.css';
import DaweLogo from './dawe-logo-white.png';

interface HeaderProps {
  title: string;
  subline?: string;
  Logo?: string;
  logoAltText?: string;
}

export const Header = ({
  title = 'Export Service',
  subline,
  Logo = DaweLogo,
  logoAltText = 'Export Service',
}: HeaderProps) => {
  return (
    <header className="au-grid au-header au-header--dark" role="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <a className="au-header__brand" href="#">
              <img className="au-header__brand-image" alt={logoAltText} src={Logo} />
              <div className="au-header__text">
                <h1 className="au-header__heading">{title}</h1>
                {subline && <div className="au-header__subline">{subline}</div>}
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

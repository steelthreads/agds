import React from 'react';
import '@gold.au/buttons/lib/css/styles.css';

interface HeaderProps {
  title: string;
  subline?: string;
}

export const Header = ({ title, subline }: HeaderProps) => {
  return (
    <header className="au-grid au-header" role="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <a className="au-header__brand" href="#">
              <img className="au-header__brand-image" alt="Insert alternate text here"
                src="https://gold.designsystemau.org/assets/img/placeholder/256x80.png" />
              <div className="au-header__text">
                <h1 className="au-header__heading">{title}</h1>
                <div className="au-header__subline">{subline}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

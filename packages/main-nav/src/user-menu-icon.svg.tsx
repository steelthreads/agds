import React from 'react';

type UserMenuIconProps = {
  size?: number;
  color?: string;
};

export const UserMenuIcon = ({ size = 28, color = '#9EE8FF' }: UserMenuIconProps) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.828 21.7387C7.62589 20.1572 10.7861 19.3285 14 19.3333C17.3333 19.3333 20.4627 20.2067 23.172 21.7387M18 11.3333C18 12.3942 17.5786 13.4116 16.8284 14.1618C16.0783 14.9119 15.0609 15.3333 14 15.3333C12.9391 15.3333 11.9217 14.9119 11.1716 14.1618C10.4214 13.4116 10 12.3942 10 11.3333C10 10.2725 10.4214 9.25505 11.1716 8.50491C11.9217 7.75476 12.9391 7.33333 14 7.33333C15.0609 7.33333 16.0783 7.75476 16.8284 8.50491C17.5786 9.25505 18 10.2725 18 11.3333ZM26 14C26 15.5759 25.6896 17.1363 25.0866 18.5922C24.4835 20.0481 23.5996 21.371 22.4853 22.4853C21.371 23.5996 20.0481 24.4835 18.5922 25.0866C17.1363 25.6896 15.5759 26 14 26C12.4241 26 10.8637 25.6896 9.4078 25.0866C7.95189 24.4835 6.62902 23.5996 5.51472 22.4853C4.40042 21.371 3.5165 20.0481 2.91345 18.5922C2.31039 17.1363 2 15.5759 2 14C2 10.8174 3.26428 7.76516 5.51472 5.51472C7.76516 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

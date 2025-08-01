import React from 'react';
import './css/GridLinkCard.css';
import { Link } from 'react-router-dom';
export default function GridLinkCard({ children, link }) {
  return (
    <div className="flex p-4   rounded-md shadow-md  dark:bg-primaryDark">
      <Link className="w-full" to={link}>
        {children}
      </Link>
    </div>
  );
}

"use client"
import React, { useEffect, useState } from 'react';
import Spacing from '../Spacing';
import Link from 'next/link';

export default function BreadcrumbStyle2() {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <>
      <Spacing md="170" />
      <div className="cs_page_heading">
        <div className="container">
          <div className="cs_page_heading_in">
            <ol className="breadcrumb text-capitalize">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              {urlSegments.map((segment, index) => (
                <li key={index} className="breadcrumb-item">
                  {index < urlSegments.length - 1 ? (
                    <Link href={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                      {segment}
                    </Link>
                  ) : (
                    <span>{segment}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

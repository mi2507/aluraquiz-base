import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

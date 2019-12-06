
// import React from 'react';

import Link from 'next/link';

import ContainedButton from '../ContainedButton';

const Navigation = ({ url, page }) => (
  <div>
    { page > 1 && (
      <Link href={`${url}${page - 1}`}>
        <ContainedButton>Previous</ContainedButton>
      </Link>
    ) }
    {/* { page > 1 && (
      <Space x={3} />
    ) } */}
    <Link href={`${url}${(page || 1) + 1}`}>
      <ContainedButton>Next</ContainedButton>
    </Link>
  </div>
);

export default Navigation;

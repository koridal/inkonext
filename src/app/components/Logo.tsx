'use client';
import Link from 'next/link';
import React from 'react'

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }:Props) => {
  return (
    <Link href={'/'}>
      <h1 className={`text-xl font-extrabold uppercase ${className}`}>
        {title}
      </h1>
    </Link>
  )
}

export default Logo
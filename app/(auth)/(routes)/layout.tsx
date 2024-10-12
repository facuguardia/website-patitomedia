import React, { ReactNode } from 'react'

import { NavbarLogin } from '@/components/NavbarLogin';

export default function RootLayout({children} : {children: ReactNode}) {
  return (
    <div>
      <NavbarLogin />
      {children}
    </div>
  );
}

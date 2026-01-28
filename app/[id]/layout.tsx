
import { Suspense } from 'react';
import { cacheLife, cacheTag } from 'next/cache';

async function LayoutContent({ 
  children, 
}: { 
  children: React.ReactNode;
}) {
  'use cache';
  cacheLife('max');
  cacheTag('layout-content');

  return <div>{children}</div>;
}

export default async function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutContent >{children}</LayoutContent>
    </Suspense>
  );
}


import { Suspense } from 'react';
import { cacheLife, cacheTag } from 'next/cache';
import { connection } from 'next/server';

async function CachedLayoutContent({ 
  children, 
}: { 
  children: React.ReactNode;
}) {
  'use cache';
  cacheLife('max');
  cacheTag('layout-content');

  throw new Error("Test error from layout");


  return <div>{children}</div>;
}

// Dynamic wrapper - defers execution to request time
async function DynamicLayoutWrapper({ 
  children, 
}: { 
  children: React.ReactNode;
}) {
  await connection(); // Defer to request time
  return <CachedLayoutContent>{children}</CachedLayoutContent>;
}

export default async function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicLayoutWrapper >{children}</DynamicLayoutWrapper>
    </Suspense>
  );
}

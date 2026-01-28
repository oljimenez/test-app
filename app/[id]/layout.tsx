
import { Suspense } from 'react';
import { cacheLife, cacheTag } from 'next/cache';

async function CachedLayoutContent({ 
  children, 
    params
}: { 
  children: React.ReactNode;
  params:  LayoutProps<"/[id]">['params'];
}) {
  'use cache';
  cacheLife('max');
  cacheTag('layout-content');

   const pageId = await params;

  if(pageId.id === 'error'){
    throw new Error("Test error from layout");
  }
  
  return (
    <div>
        <h1>Layout Wrapper</h1>
        {children}
    </div>
  )
};

export default async function RootLayout({
  children,
  params
}: LayoutProps<"/[id]">) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CachedLayoutContent params={params}>{children}</CachedLayoutContent>
    </Suspense>
  );
}

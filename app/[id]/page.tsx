
import { cacheLife, cacheTag } from 'next/cache';
import { Suspense } from 'react';



async function PageContent() {
  'use cache';
  cacheLife('max');
  cacheTag('page-content');

  return <div>Page Content</div>;
}

export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
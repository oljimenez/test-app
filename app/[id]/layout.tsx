
import { Suspense } from 'react';
import { connection } from 'next/server';

async function LayoutContent({ children }: { children: React.ReactNode }) {
  await connection(); // Defer to request time so errors are caught by error boundary

  throw new Error("Test error from layout");

  return <div>{children}</div>;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutContent>{children}</LayoutContent>
    </Suspense>
  );
}

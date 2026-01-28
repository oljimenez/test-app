import Link from "next/link";
import { cacheLife } from 'next/cache';

export default async function Home() {
  'use cache';
  cacheLife('max');
   
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/example" className="text-2xl font-bold underline">
            Example
        </Link>
      </main>
    </div>
  );
}

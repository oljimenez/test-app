import { connection } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

 export default async function Home(props: {params: Promise<{example: string}>}) {
    const params = await props.params;
    await connection();

  const res =  await fetch("https://dog.ceo/api/breeds/image/random", {
    cache:"force-cache"
   }).then((res) => res.json());
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <img src={res.message} alt="A Random Dog" width={400} height={400} />
      </main>
    </div>
  );
}

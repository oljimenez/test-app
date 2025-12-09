import { connection } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    await connection();

  throw new Error("Test error from layout");

  const res =  await fetch("https://dog.ceo/api/breeds/image/random", {
    cache:"force-cache"
   }).then((res) => res.json());

  return (
    <div >
        {res.message}
        {children}
    
    </div>
  );
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

//   throw new Error("Test error from layout");



  return (
    <div >
        {children}
    </div>
  );
}

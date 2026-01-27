'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error:__,
  reset:_,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
   
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>This is a global error file</p>
      </body>
    </html>
  )
}